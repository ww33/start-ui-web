import { createStore, createEvent, sample, merge } from 'effector';
import { TCoin, IOHLCData } from '../types';
import { getKlineFx } from './effects/linearPublic';

export const evtChangeCoin = createEvent<string>();
export const evtLoadCandles = createEvent();
const currentCoinKey = 'currentCoin';
const coinDefault: string = 'BTC';

export const $candles = createStore<IOHLCData[] | undefined>([]);

export const $coin = createStore<string>('')
  .on(evtChangeCoin, (_, coin) => coin);

sample({
  clock: merge([evtLoadCandles]),
  source: $coin,
  fn: (coin) => (coin),
  target: getKlineFx,
});

sample({
  clock: getKlineFx.done,
  fn: ({ result }) => (result),
  target: $candles,
});
//$candles.watch(evt => console.log(evt))

// //const currentCoin = type window !== "undefined" ? window.localStorage.getItem(currentCoinKey) || coinDefault: coinDefault
evtChangeCoin(coinDefault);
/*setInterval(() => {
  changeCoin($coin.getState())
}, 20000)*/

