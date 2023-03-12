import React from 'react';
import {
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

import { testSpeech } from '@/spa/trading/utils/speech';
import { DateInterval, $dateRange } from "@/spa/trading/ui/DateInterval";
import { getCandlesByInterval, loadCandlesByInterval } from "@/spa/trading/utils/candles";

export const CandlesPanel = () => {
  const handleLoad = async () => {
    loadCandlesByInterval().catch(e => console.error(e))
  }
  const handleGet = async () => {
    const candles=  await getCandlesByInterval().catch(e => console.error(e))
    console.log({candles})
  }
  return (
    <>
      <Stack direction={'row'} spacing='36px'>
        <DateInterval/>
        <ButtonGroup size="sm" variant="outline" spacing="6">
          <Button colorScheme="warning" onClick={handleLoad}>Load candles</Button>
          <Button colorScheme="green" onClick={handleGet}>Get candles</Button>
          {/*<Button colorScheme="green" onClick={testSpeech}>Speech</Button>*/}
        </ButtonGroup>
      </Stack>

    </>
  );
};
