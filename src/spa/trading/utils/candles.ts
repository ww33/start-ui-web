import {$dateRange} from '../ui/DateInterval'
import {$coin} from '../store/coin'

type TLoadCandlesParams = {
  symbol: string
  days: string[]
}
export const loadCandlesByInterval = async ():Promise<Boolean> => {
  return  new Promise((resolve, reject) => {
    const dateRange = $dateRange.getState()
    const coin = $coin.getState()
    console.log({coin, dateRange})
  })
}
