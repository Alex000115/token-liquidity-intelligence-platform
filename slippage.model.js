export function estimateSlippage(expectedPrice, executedPrice) {
  if (expectedPrice === 0) return 0;
  return ((expectedPrice - executedPrice) / expectedPrice) * 100;
}
