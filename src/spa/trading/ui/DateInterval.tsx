import { Kbd, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  DateSelector,
  DateSelectorNextDayButton,
  DateSelectorPicker,
  DateSelectorPreviousDayButton
} from "@/components/DateSelector";
import dayjs from "dayjs";

export const DateInterval = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <Stack spacing="8">
      <DateSelector date={selectedDate} onChange={setSelectedDate}>
        <DateSelectorPreviousDayButton aria-label="Previous day" />
        <DateSelectorPicker />
        <DateSelectorNextDayButton aria-label="Next day" />
      </DateSelector>

      <Text>
        You can use the <Kbd>ArrowLeft</Kbd> to go to the previous day, and the{' '}
        <Kbd>ArrowRight</Kbd> to go to the next day.
      </Text>
    </Stack>
  );
}
