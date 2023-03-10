import React from 'react';
import { Page, PageContent } from '@/spa/layout';
import { TradingPanel } from '@/spa/trading/ui/TradingPanel';

export const PageDashboard = () => {
  return (
    <Page>
      <PageContent>
        <TradingPanel />
      </PageContent>
    </Page>
  );
};
