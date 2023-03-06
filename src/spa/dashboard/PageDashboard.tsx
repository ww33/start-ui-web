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

export const PageDashboard = () => {
  const candlesRsiEma = useStore($candlesRsiEma);
  const contracts = useStore($contracts);

  const test = async () => {
    const voices = window.speechSynthesis.getVoices();
    const voice1 = voices.find(({ voiceURI }) => voiceURI === 'Google русский');
    const voice2 = voices.find(
      ({ voiceURI }) => voiceURI === 'Microsoft Pavel Mobile - Russian (Russia)'
    );
    const voice3 = voices.find(
      ({ voiceURI }) => voiceURI === 'Microsoft Irina Desktop'
    );
    const rate = 1.1;

    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'ru';
    // @ts-ignore
    speech.voice = voice1;
    speech.text = 'здорова, корова!';
    speech.rate = rate;
    window.speechSynthesis.speak(speech);

    const speech2 = new SpeechSynthesisUtterance();
    speech2.lang = 'ru';
    // @ts-ignore
    speech2.voice = voice2;
    speech2.text = 'здорова, корова!';
    speech2.pitch = 2;
    speech.rate = rate;
    window.speechSynthesis.speak(speech2);

    const speech3 = new SpeechSynthesisUtterance();
    speech3.lang = 'ru';
    // @ts-ignore
    speech3.voice = voice3;
    speech3.text = 'здорова, корова!';
    speech.rate = 2;
    window.speechSynthesis.speak(speech3);
    //console.log(await getContracts());
  };

  return (
    <Page>
      <PageContent>
        <Heading size="md" mb="4">
          Dashboard v5
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
                <Button colorScheme="blue" onClick={evtLoadCandles}>
                  evtLoadCandles
                </Button>
                <Button colorScheme="green" onClick={test}>
                  test
                </Button>
              </ButtonGroup>
            </TabPanel>
            <TabPanel>
              <ButtonGroup size="sm" variant="outline" spacing="6">
                <Button onClick={evtLoadContracts}>load</Button>
              </ButtonGroup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContent>
    </Page>
  );
};
