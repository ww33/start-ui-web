
export const coins = ['BTC', 'ETH', 'XRP'] as const

export type TCoin = typeof coins[number]

export type IOHLCData = {
  close: number;
  date: Date;
  high: number;
  low: number;
  open: number;
  volume: number;
}

export type TOrder = {
  qty: number
  price: number
  direction: 'buy' | 'sell'
}
