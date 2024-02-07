import React from 'react';

import {
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import { evtLoadContracts } from '../store/events';

export const ContractsPanel = () => {
  return (
    <>
      <ButtonGroup size="sm" variant="outline" spacing="6">
        <Button onClick={evtLoadContracts}>Load contracts</Button>
      </ButtonGroup>
    </>
  );
};
