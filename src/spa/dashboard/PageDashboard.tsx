import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useStore } from 'effector-react';

import { Page, PageContent } from '@/spa/layout';

import { $candlesRsiEma } from '../traiding/store/coin';
import { $contracts } from '../traiding/store/contract';
import { evtLoadCandles, evtLoadContracts } from '../traiding/store/events';
import { getContracts } from '../traiding/store/utils/idb';
import { testSpeech } from '../traiding/store/utils/speech';

export const PageDashboard = () => {
  const candlesRsiEma = useStore($candlesRsiEma);
  const contracts = useStore($contracts);

  return (
    <Page>
      <PageContent>
        <Heading size="md" mb="4">
          Dashboard v6
        </Heading>
        <Tabs align="end" variant="enclosed">
          <TabList>
            <Tab>Candles</Tab>
            <Tab>Contracts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
      </PageContent>
    </Page>
  );
};
