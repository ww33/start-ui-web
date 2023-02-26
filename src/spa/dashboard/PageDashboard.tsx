import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Trans, useTranslation } from 'react-i18next';
import { CgLoadbarDoc } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

import { Icon } from '@/components/Icons';
import { Page, PageContent } from '@/spa/layout';
import {evtLoadCandles} from '../traiding/store/coin'

export const PageDashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <Page>
      <PageContent>
        <Heading size="md" mb="4">
          Dashboard v2
        </Heading>
        <Tabs align='end' variant='enclosed'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ButtonGroup size='sm' variant='outline' spacing='6'>
                <Button colorScheme='blue' onClick={evtLoadCandles}>evtLoadCandles</Button>
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
