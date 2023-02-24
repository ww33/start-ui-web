import { createEffect } from 'effector';
import subDays from 'date-fns/subDays';
import { getLinearClientClientPublic } from './clients';

const clientPublic = getLinearClientClientPublic();

export const getKlineFx = createEffect(async (symbol: string) => {
  const date20days = subDays(new Date(), 20);
  const timestampFrom = Math.round(date20days.getTime() / 1000);

  const params = { symbol: symbol + 'USDT', interval: 'D', from: timestampFrom, limit: 20 };

  const { result, ret_msg, ret_code } = await clientPublic.getKline(params);
  if (ret_code === 0) {
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
  }
});














