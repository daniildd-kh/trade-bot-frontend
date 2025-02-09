export enum CurrencyVariant {
  ETH = "ETH",
}

export interface StatusProps {
  capital?: number;
  currencyVariant?: CurrencyVariant;
  balance?: number;
  onHold?: number;
}