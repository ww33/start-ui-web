import { createEffect } from 'effector';
import subDays from 'date-fns/subDays';
import { getContractClient } from './clients';
import { throwError } from "rxjs";

const client = getContractClient();

export const getContractFx = createEffect(async () => {

  const { result, retCode, retMsg } = await client.getInstrumentInfo({
    baseCoin: 'USDT',
    category: 'linear'
  });
  console.log(result.list)
  if (retCode === 0) {
    const res = result.list.map(({symbol, contractType, lotSizeFilter  }) => {
      const {minTradingQty, qtyStep} = lotSizeFilter
      return {
        symbol,
        contractType,
        minTradingQty,
        qtyStep
      };
    });
    return res
  } else {
    console.error({ result, retCode, retMsg });
    throwError(retMsg)
    return []
  }
});














