import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useStore } from 'effector-react';

import { $candlesRsiEma } from '@/spa/trading/store/coin';
import { $contracts } from '@/spa/trading/store/contract';
import { evtLoadCandles, evtLoadContracts } from '@/spa/trading/store/events';
import { getContracts } from '@/spa/trading/store/utils/idb';
import { testSpeech } from '@/spa/trading/store/utils/speech';
import { DateInterval } from "@/spa/trading/ui/DateInterval";

export const TradingPanel = () => {
  const candlesRsiEma = useStore($candlesRsiEma);
  const contracts = useStore($contracts);

  return (
    <>
      <Heading size="md" mb="4">
        Trading Panel v1
      </Heading>
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>Candles</Tab>
          <Tab>Contracts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            <ButtonGroup size="sm" variant="outline" spacing="6">
              <Button onClick={evtLoadContracts}>Load contracts</Button>
            </ButtonGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </>
  );
};
