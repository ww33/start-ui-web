import dayjs from 'dayjs';
import { getLinearClientPublic } from './client';
import { $dateRange } from '../ui/DateInterval'
import { $coin } from '../store/coin'
import { getCandles, setCandles } from './idb'

const client = getLinearClientPublic();

export const loadCandlesByInterval = async (): Promise<Boolean> => {
  return new Promise(async (resolve, reject) => {
    const dateRange = $dateRange.getState()
    const symbol = $coin.getState()
    for (const date of dateRange) {
      try {
        const candlesSaved = await getCandles(symbol, date);
        if (!candlesSaved) {
          const start = dayjs(date).startOf('day')
          //const end = dayjs(date).endOf('day')
          /*console.log('start', start.unix())
          console.log('end', end.unix())*/
          const params = {symbol, interval: '15', from: start.unix(), limit: 96};

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
            if(arr.length > 0){
              const isCandlesSaved = await setCandles(symbol, date, arr)
              console.log({isCandlesSaved})
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
