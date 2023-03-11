import dayjs from 'dayjs';
import { createEffect } from 'effector';

import { getLinearClientPublic } from '@/spa/trading/utils/client';
import { set } from "idb-keyval";
import { DB_KEYS } from "@/spa/trading/utils/idb";

const client = getLinearClientPublic();

/*//import subDays from 'date-fns/subDays';
export const getKline1DFx = createEffect(
  async (symbol: string, limit: number = 40) => {
    const date20days = subDays(new Date(), limit);
    const timestampFrom = Math.round(date20days.getTime() / 1000);

    const params = {
      symbol: symbol + 'USDT',
      interval: 'D',
      from: timestampFrom,
      limit,
    };

    const { result, ret_msg, ret_code } = await client.getKline(params);
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
      return [];
    }
  }
);*/

export const getKline15minFx = createEffect(
  async (symbol: string, limit: number = 100) => {
    const a = dayjs();
    const b = a.add(-15 * 100, 'm');
    const params = { symbol, interval: '15', from: b.unix() };

    const { result, ret_msg, ret_code } = await client.getKline(params);
    if (ret_code === 0) {
      return result.map(({ open, high, low, close, open_time, volume }) => {
        return {
          open: Number(open),
          high: Number(high),
          low: Number(low),
          close: Number(close),
          date: new Date(open_time * 1000),
          volume: Number(volume),
          symbol,
        };
      });
    } else {
      console.error({ result, ret_msg, ret_code });
      return [];
    }
  }
);

export const getKline60minFx = createEffect(
  async (symbol: string, limit: number = 100) => {
    const a = dayjs();
    const b = a.add(-60 * 100, 'm');
    const params = { symbol, interval: '60', from: b.unix() };

    const { result, ret_msg, ret_code } = await client.getKline(params);
    if (ret_code === 0) {
      return result.map(({ open, high, low, close, open_time, volume }) => {
        return {
          open: Number(open),
          high: Number(high),
          low: Number(low),
          close: Number(close),
          date: new Date(open_time * 1000),
          volume: Number(volume),
          symbol,
        };
      });
    } else {
      console.error({ result, ret_msg, ret_code });
      return [];
    }
  }
);
