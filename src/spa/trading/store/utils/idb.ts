import { set, get, clear } from 'idb-keyval';
import {TContract} from '../../types'

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
  return  new Promise((resolve) => {
    get(DB_KEYS.CONTRACTS_ALL).then((val) => resolve(val));
  })
}
