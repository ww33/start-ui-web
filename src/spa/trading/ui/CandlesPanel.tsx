import React from 'react';
import {
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

import { testSpeech } from '@/spa/trading/utils/speech';
import { DateInterval, $dateRange } from "@/spa/trading/ui/DateInterval";
import { getCandlesByInterval15, loadCandlesByInterval15 } from "@/spa/trading/utils/candles15";
import { evtSetCandles } from "@/spa/trading/store/events";

export const CandlesPanel = () => {

  const handleGet15 = async () => {
    await loadCandlesByInterval15().catch(e => console.error(e))
    const candles =  await getCandlesByInterval15().catch(e => console.error(e))
    if(candles && candles.length >0) evtSetCandles(candles)
    //console.log({candles})
  }
  return (
    <>
      <Stack direction={'row'} spacing='36px'>
        <DateInterval/>
        <ButtonGroup size="sm" variant="outline" spacing="6">
          {/*<Button colorScheme="warning" onClick={handleLoad}>Load candles</Button>*/}
          <Button colorScheme="green" onClick={handleGet15}>Get candles 15</Button>
          {/*<Button colorScheme="green" onClick={testSpeech}>Speech</Button>*/}
        </ButtonGroup>
      </Stack>

    </>
  );
};
