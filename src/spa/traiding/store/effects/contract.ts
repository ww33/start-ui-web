import { createEffect } from 'effector';
import subDays from 'date-fns/subDays';
import { getContractClient } from './clients';

const client = getContractClient();

export const getContractFx = createEffect(async () => {

  const { result, retCode, retMsg } = await client.getInstrumentInfo({
    baseCoin: 'USDT',
    category: 'linear'
  });
  console.log({ result, retCode, retMsg });
  /*if (ret_code === 0) {
    return result.map(({ open, high, low, close, open_time, volume }) => {
      return {
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
        date: new Date(open_time * 1000),
        volume: Number(volume),
      };
    });
  } else {
    console.error({ ret_code, ret_msg });
  }*/
});














