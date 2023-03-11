import React from 'react';
import {
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

import { evtLoadCandles } from '@/spa/trading/store/events';
import { testSpeech } from '@/spa/trading/store/utils/speech';
import { DateInterval } from "@/spa/trading/ui/DateInterval";

export const CandlesPanel = () => {
  return (
    <>
      <Stack direction={'row'} spacing='36px'>
        <DateInterval/>
        <ButtonGroup size="sm" variant="outline" spacing="6">
          <Button colorScheme="blue" onClick={evtLoadCandles}>Load candles</Button>
          <Button colorScheme="green" onClick={testSpeech}>Speech</Button>
        </ButtonGroup>
      </Stack>

    </>
  );
};
