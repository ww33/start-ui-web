import { RSI, SMA, SuperTrend as SUPER_TREND } from '@debut/indicators';
import { createEvent, createStore, merge, sample } from 'effector';

import { TDirection, Tohlc } from '../types';
import { getKline60minFx } from './effects/linearPublicEndPoint';
import { evtChangeCoin, evtLoadCandles } from './events';

const coinDefault: string = 'BTCUSDT';

export const $candles = createStore<Tohlc[]>([]);

export const $candlesRsiEma = $candles.map((state) => {
  const Rsi = new RSI(14);
  const Sma = new SMA(14);
  const SuperTrend = new SUPER_TREND();
  return state
    .map((item) => {
      const {high, low, close} = item;
      const rsi = Rsi.nextValue(close);
      const maRsi = rsi ? Sma.nextValue(rsi) : 0;
      const trendObj = SuperTrend.nextValue(high, low, close);
      const direction = trendObj?.direction;
      const trend: TDirection = direction
        ? direction === -1
          ? 'LONG'
          : 'SHORT'
        : null;
      return {...item, rsi, maRsi, trend};
    })
    .map((item, index, array) => {
      return {...item, rsiPrev: array[index - 1]?.rsi};
    });
});


export const $coin = createStore<string>('')
  .on(evtChangeCoin, (_, coin) => coin
  );
evtChangeCoin(coinDefault);
sample({
  clock: evtLoadCandles,
  source: $coin,
  fn: (symbol) => symbol,
  target: getKline60minFx,
});

sample({
  clock: getKline60minFx.done,
  fn: ({result}) => result,
  target: $candles,
});

// //const currentCoin = type window !== "undefined" ? window.localStorage.getItem(currentCoinKey) || coinDefault: coinDefault

