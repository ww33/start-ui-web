
export const coins = ['BTC', 'ETH', 'XRP'] as const

export type TCoin = typeof coins[number]

export type Tohlc = {
  close: number;
  date: Date;
  high: number;
  low: number;
  open: number;
  volume: number;
}
export type Tohlc_rsi_ema = {
  close: number;
  date: Date;
  rsi: number | undefined;
  ema: number | undefined;
}

export type TOrder = {
  qty: number
  price: number
  direction: 'buy' | 'sell'
}
