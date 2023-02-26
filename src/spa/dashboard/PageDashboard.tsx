import React from 'react';
import {Box, Button, ButtonGroup, Heading, Text, Wrap} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { CgLoadbarDoc } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { useStore } from 'effector-react';

import { Icon } from '@/components/Icons';
import { Page, PageContent } from '@/spa/layout';
import { evtLoadCandles } from '../traiding/store/events';
import { $candlesRsiEma } from '../traiding/store/coin'

export const PageDashboard = () => {
  const { t } = useTranslation(['dashboard']);
  const candlesRsiEma = useStore($candlesRsiEma)

  return (
    <Page>
      <PageContent>
        <Heading size="md" mb="4">
          Dashboard v3
        </Heading>
        <Tabs align='end' variant='enclosed'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Text>{JSON.stringify(candlesRsiEma[candlesRsiEma?.length -1])}</Text>
              </Box>
              <ButtonGroup size='sm' variant='outline' spacing='6'>
                <Button colorScheme='blue' onClick={() => evtLoadCandles(null)}>evtLoadCandles</Button>
                <Button>Cancel</Button>
              </ButtonGroup>
            </TabPanel>
            <TabPanel>
              <Wrap mt="4" spacing="4">
                <Button
                  variant="link"
                  as="a"
                  href="https://github.com/BearStudio/start-ui"
                >
                  <Icon icon={FaGithub} me="1" /> {t('dashboard:links.github')}
                </Button>
                <Button variant="link" as="a" href="https://docs.web.start-ui.com">
                  <Icon icon={CgLoadbarDoc} me="1" />{' '}
                  {t('dashboard:links.documentation')}
                </Button>
                <Button
                  variant="link"
                  as="a"
                  href="https://github.com/BearStudio/start-ui/issues/new"
                >
                  <Icon icon={FiAlertCircle} me="1" />{' '}
                  {t('dashboard:links.openIssue')}
                </Button>
              </Wrap>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContent>
    </Page>
  );
};
