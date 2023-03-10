import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Text,
} from '@chakra-ui/react';
import { useStore } from 'effector-react';

import { $candlesRsiEma } from '@/spa/trading/store/coin';
import { $contracts } from '@/spa/trading/store/contract';
import { evtLoadCandles } from '@/spa/trading/store/events';
import { testSpeech } from '@/spa/trading/store/utils/speech';
import { DateInterval } from "@/spa/trading/ui/DateInterval";

export const CandlesPanel = () => {
  const candlesRsiEma = useStore($candlesRsiEma);
  const contracts = useStore($contracts);

  return (
    <>
      <Box>
        <DateInterval/>
      </Box>
      <Box>
        <Text>
          {JSON.stringify(candlesRsiEma[candlesRsiEma?.length - 1])}
        </Text>
      </Box>
      <ButtonGroup size="sm" variant="outline" spacing="6">
        <Button colorScheme="blue" onClick={evtLoadCandles}>Load candles</Button>
        <Button colorScheme="green" onClick={testSpeech}>Speech</Button>
      </ButtonGroup>
    </>
  );
};
