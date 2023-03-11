import { set, get, clear } from 'idb-keyval';
import {TContract, Tohlc} from '@/spa/trading/types'

/*CANDLES*/
const getCandleKey = (symbol: string, date: string)=> {
  return `${symbol}15_${date}`
}

export const getCandles = async (symbol: string, date: string): Promise<Tohlc[]> => {
  return  new Promise((resolve, reject) => {
    const key = getCandleKey(symbol, date)
    get(key)
      .then((val) => resolve(val))
      .catch((err) => reject(err));
  })
}

/*CONTRACTS*/
export const DB_KEYS = {
  CONTRACTS_ALL:'CONTRACTS_ALL'
}

export const setContracts = async (val: TContract[]):Promise<Boolean> => {
  return  new Promise((resolve, reject) => {
    set(DB_KEYS.CONTRACTS_ALL, val)
      .then(() => resolve(true))
      .catch((err) => reject(err));
  })
}

export const getContracts = async (): Promise<TContract[]> => {
  return  new Promise((resolve, reject) => {
    get(DB_KEYS.CONTRACTS_ALL)
      .then((val) => resolve(val))
      .catch((err) => reject(err));
  })
}
