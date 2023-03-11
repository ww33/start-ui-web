import { ButtonGroup, Stack, Text } from "@chakra-ui/react";
import {
  DateSelector,
  DateSelectorNextDayButton,
  DateSelectorPicker,
  DateSelectorPreviousDayButton
} from "@/components/DateSelector";

import dayjs, { Dayjs } from "dayjs";

import { createEvent, createStore, merge, sample } from 'effector';
import { useStore } from 'effector-react';

export const onChangeStart = createEvent<Dayjs>();
export const $start = createStore<Dayjs>(dayjs()).on(onChangeStart, (_, val) => val)
export const onChangeEnd = createEvent<Dayjs>();
export const $end = createStore<Dayjs>(dayjs()).on(onChangeEnd, (_, val) => val)

export const DateInterval = () => {
  const start = useStore($start)
  const end = useStore($end)
  return (
    <ButtonGroup size="sm">
      <DateSelector date={start} onChange={onChangeStart}>
        <DateSelectorPreviousDayButton aria-label="Previous day"/>
        <DateSelectorPicker/>
        <DateSelectorNextDayButton aria-label="Next day"/>
      </DateSelector>
      <DateSelector date={end} onChange={onChangeEnd}>
        <DateSelectorPreviousDayButton aria-label="Previous day"/>
        <DateSelectorPicker/>
        <DateSelectorNextDayButton aria-label="Next day"/>
      </DateSelector>
    </ButtonGroup>
  );
}
