import React from 'react';
import { Page, PageContent } from '@/app/layout';
import { TradingPanel } from '@/features/trading';

export const PageDashboard = () => {
  return (
    <Page>
      <PageContent>
        <TradingPanel />
      </PageContent>
    </Page>
  );
};
