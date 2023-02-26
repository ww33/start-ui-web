import { createStore, createEvent, sample, merge } from 'effector';
import { RSI } from '@debut/indicators';
import { TCoin, Tohlc, Tohlc_rsi_ema } from '../types';
import {evtChangeCoin, evtLoadCandles, evtLoadContracts} from './events'
import { getKlineFx } from './effects/linearPublic';
import { getContractFx } from './effects/contract';

const currentCoinKey = 'currentCoin';
const coinDefault: string = 'BTC';

export const $candles = createStore<Tohlc[] | undefined>([]);

export const $candlesRsiEma = $candles.map((st) => {
  const  rsi = new RSI(14)
  return st ? st.map(st => {
    const { close, date } = st;
    return {close, date, ema:1, rsi:rsi.nextValue(close)};
  }) : [];
});

export const $coin = createStore<string>('')
  .on(evtChangeCoin, (_, coin) => coin);

sample({
  clock: evtLoadCandles,
  source: $coin,
  fn: (coin) => (coin),
  target: getKlineFx,
});

sample({
  clock: getKlineFx.done,
  fn: ({ result }) => (result),
  target: $candles,
});

sample({
  clock: evtLoadContracts,
  target: getContractFx,
});

// //const currentCoin = type window !== "undefined" ? window.localStorage.getItem(currentCoinKey) || coinDefault: coinDefault
evtChangeCoin(coinDefault);
/*setInterval(() => {
  changeCoin($coin.getState())
}, 20000)*/

