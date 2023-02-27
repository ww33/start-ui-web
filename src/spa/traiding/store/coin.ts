import { createStore, createEvent, sample, merge } from 'effector';
import { RSI, SMA } from '@debut/indicators';
import { Tohlc } from '../types';
import { evtChangeCoin, evtLoadCandles, evtLoadContracts } from './events'
import { getKline15Fx } from './effects/linearPublic';
import { getContractFx } from './effects/contract';

const currentCoinKey = 'currentCoin';
const coinDefault: string = 'BTC';

export const $candles = createStore<Tohlc[]>([]);

export const $candlesRsiEma = $candles.map((st) => {
  const Rsi = new RSI(14)
  const Ema = new SMA(14)
  return st
    .map(({close, date}) => {
      const rsi = Rsi.nextValue(close)
      const ema = rsi ? Ema.nextValue(rsi) : 0
      return {close, date, rsi, ema};
    })
    .map((item, index, array) => {
      return {...item, rsiPrev: array[index - 1]?.rsi}
    })
})
$candlesRsiEma.watch(e => console.log({e}))
export const $coin = createStore<string>('')
  .on(evtChangeCoin, (_, coin) => coin);

sample({
  clock: evtLoadCandles,
  source: $coin,
  fn: (coin) => (coin),
  target: getKline15Fx,
});

sample({
  clock: getKline15Fx.done,
  fn: ({result}) => (result),
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

