import dayjs from 'dayjs';
import { getLinearClientPublic } from './client';
import { $dateRange } from '../ui/DateInterval'
import { $coin } from '../store/coin'
import { getCandles, setCandles } from './idb'
import {Tohlc} from '@/spa/trading/types'

const client = getLinearClientPublic();

export const getCandlesByInterval = async (): Promise<Tohlc[]> => {
  return new Promise(async (resolve, reject) => {
    let allCandles:Tohlc[] = []
    const dateRange = $dateRange.getState()
    const symbol = $coin.getState()
    for (const date of dateRange) {
      try {
        const candlesSaved = await getCandles(symbol, date);
        allCandles = allCandles.concat(candlesSaved)
      } catch (e) {
        reject(e)
      }
    }
    resolve(allCandles)
  })
}

export const loadCandlesByInterval = async (): Promise<Boolean> => {
  return new Promise(async (resolve, reject) => {
    const dateRange = $dateRange.getState()
    const symbol = $coin.getState()
    for (const date of dateRange) {
      try {
        const candlesSaved = await getCandles(symbol, date);
        if (!candlesSaved || date === dayjs().format('YYYY-MM-DD')) {

          const from = dayjs(date).startOf('day').unix()
          const params = {symbol, interval: '15', from, limit: 96};
          const {result, ret_msg, ret_code} = await client.getKline(params);

          if (ret_code === 0) {
            const arr = result.map(({open, high, low, close, open_time, volume}) => {
              return {
                open: Number(open),
                high: Number(high),
                low: Number(low),
                close: Number(close),
                date: new Date(open_time * 1000),
                volume: Number(volume),
                symbol,
              };
            })
            if (arr.length > 0) {
              const isCandlesSaved = await setCandles(symbol, date, arr)
              console.log({date, isCandlesSaved})
            }
          } else {
            console.error({result, ret_msg, ret_code});
            reject({result, ret_msg, ret_code});
          }
        } else {
          console.log(`${symbol} за ${date} загружено`)
        }
      } catch (e) {
        reject(e)
      }
    }
    resolve(true)
  })
}
