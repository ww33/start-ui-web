import {$dateRange} from '../ui/DateInterval'
import {$coin} from '../store/coin'
import {getCandles} from './idb'

export const loadCandlesByInterval = async ():Promise<Boolean> => {
  return  new Promise(async (resolve, reject) => {
    const dateRange = $dateRange.getState()
    const symbol = $coin.getState()
    for (const date of dateRange) {
      try {
        const candles = await getCandles(symbol, date);
        if(!candles){

        } else {
          console.log(`${symbol} за ${date} загружено`)
        }
      }catch (e){
        reject(e)
      }
    }
    resolve(true)
  })
}
