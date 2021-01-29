export interface CurrencyData {
  base: string,
  date: string,
  symbol?: string,
  value?: number,
  rates?: {[name: string]: number}
}

