import subDays from 'date-fns/subDays';
import { createEffect } from 'effector';
import { throwError } from 'rxjs';

import { getContractClient } from '../utils/client';

const client = getContractClient();

export const getContractFx = createEffect(async () => {
  const { result, retCode, retMsg } = await client.getInstrumentInfo({
    category: 'linear',
  });
  console.log(result.list);
  if (retCode === 0) {
    return result.list.map(({ symbol, contractType, lotSizeFilter }) => {
      const { minTradingQty, qtyStep } = lotSizeFilter;
      return {
        symbol,
        contractType,
        minTradingQty,
        qtyStep,
      };
    });
  } else {
    console.error({ result, retCode, retMsg });
    throwError(retMsg);
    return [];
  }
});
