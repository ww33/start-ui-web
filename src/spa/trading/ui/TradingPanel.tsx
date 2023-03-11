import React from 'react';
import {
  Heading,
} from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { CandlesPanel } from "@/spa/trading/ui/CandlesPanel";
import { ContractsPanel } from "@/spa/trading/ui/ContractsPanel";

export const TradingPanel = () => {
  return (
    <>
      <Heading size="md" mb="4">
        Trading Panel v2
      </Heading>
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>Candles</Tab>
          <Tab>Contracts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CandlesPanel/>
          </TabPanel>
          <TabPanel>
            <ContractsPanel/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
