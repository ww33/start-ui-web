
export const coins = ['BTC', 'ETH', 'XRP'] as const

export type TCoin = typeof coins[number]
export type TDirection = 'LONG' | 'SHORT' | null

export type Tohlc = {
  symbol: string;
  close: number;
  date: Date;
  high: number;
  low: number;
  open: number;
  volume: number;
}

export type Tohlc_rsi_ma = {
  close: number;
  date: Date;
  rsi: number | undefined;
  ma: number | undefined;
}

export type TOrder = {
  qty: number
  price: number
  direction: 'buy' | 'sell'
}

export type TContract = {
  symbol: string
  contractType: string
  minTradingQty: number
  qtyStep: number
}
