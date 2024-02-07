import { ButtonGroup, Stack, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { createEvent, createStore, combine } from 'effector';
import { useStore } from 'effector-react';

import {
  DateSelector,
  DateSelectorNextDayButton,
  DateSelectorPicker,
  DateSelectorPreviousDayButton
} from "@/components/DateSelector";
import { dateRange } from '../utils/date'

const DateIntervalStartKey = 'DateIntervalStartKey'
const DateIntervalEndKey = 'DateIntervalEndKey'

export const onChangeStart = createEvent<Dayjs>();
const startDaySaved = localStorage.getItem(DateIntervalStartKey)
const startDay = startDaySaved ? dayjs(startDaySaved) : dayjs()
export const $start = createStore<Dayjs>(startDay).on(onChangeStart, (_, val) => val)
$start.watch(val => localStorage.setItem(DateIntervalStartKey, val.format('YYYY-MM-DD')))

export const onChangeEnd = createEvent<Dayjs>();
const endDaySaved = localStorage.getItem(DateIntervalEndKey)
const endDay = startDaySaved ? dayjs(endDaySaved) : dayjs()
export const $end = createStore<Dayjs>(endDay).on(onChangeEnd, (_, val) => val)
$end.watch(val => localStorage.setItem(DateIntervalEndKey, val.format('YYYY-MM-DD')))

export const $dateRange = combine($start, $end, (start, end) => dateRange(start, end))

export const DateInterval = () => {
  const start = useStore($start)
  const end = useStore($end)

  return (
    <ButtonGroup size="sm">
      <DateSelector date={start} onChange={onChangeStart}>
        <DateSelectorPreviousDayButton colorScheme="orange" aria-label="Previous day"/>
        <DateSelectorPicker/>
        <DateSelectorNextDayButton colorScheme="messenger" aria-label="Next day"/>
      </DateSelector>
      <DateSelector date={end} onChange={onChangeEnd}>
        <DateSelectorPreviousDayButton colorScheme="orange" aria-label="Previous day"/>
        <DateSelectorPicker/>
        <DateSelectorNextDayButton colorScheme="telegram" aria-label="Next day"/>
      </DateSelector>
    </ButtonGroup>
  );
}
