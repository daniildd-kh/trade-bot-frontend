export enum CurrencyVariant {
  BTC = "BTC",
}

export interface StatusProps {
  capital?: number;
  currencyVariant?: CurrencyVariant;
  balance?: number;
  onHold?: number;
}