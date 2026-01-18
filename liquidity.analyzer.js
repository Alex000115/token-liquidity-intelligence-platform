export function analyzeLiquidity(poolSize, reserves) {
  return {
    poolSize,
    reserves,
    liquidityRatio: reserves === 0 ? 0 : poolSize / reserves
  };
}
