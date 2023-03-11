import React from 'react';
import {
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

//import { evtLoadCandles } from '@/spa/trading/store/events';
import { testSpeech } from '@/spa/trading/utils/speech';
import { DateInterval, $dateRange } from "@/spa/trading/ui/DateInterval";
import { useStore } from 'effector-react';
import { loadCandlesByInterval } from "@/spa/trading/utils/candles";

export const CandlesPanel = () => {
  const dateRange = useStore($dateRange)
  const handleLoad = async () => {
    loadCandlesByInterval().catch(e => console.error(e))
  }
  return (
    <>
      <Stack direction={'row'} spacing='36px'>
        <DateInterval/>
        <ButtonGroup size="sm" variant="outline" spacing="6">
          <Button colorScheme="blue" onClick={handleLoad}>Load candles</Button>
          <Button colorScheme="green" onClick={testSpeech}>Speech</Button>
        </ButtonGroup>
      </Stack>

    </>
  );
};
