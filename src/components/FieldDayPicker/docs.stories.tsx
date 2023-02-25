import React from 'react';

import { Box, Button, Stack } from '@chakra-ui/react';
import { Formiz } from '@formiz/core';

export const Default = () => (
  <Formiz onSubmit={console.log} autoForm>
    <Stack spacing={4}>

      <Box>
        <Button type="submit">Submit</Button>
      </Box>
    </Stack>
  </Formiz>
);
