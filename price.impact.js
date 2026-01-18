export function calculatePriceImpact(tradeSize, poolLiquidity) {
  if (poolLiquidity === 0) return 0;
  return (tradeSize / poolLiquidity) * 100;
}
