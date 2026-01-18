import { analyzeLiquidity } from "./liquidity.analyzer.js";
import { calculatePriceImpact } from "./price.impact.js";

export function simulateLiquidity() {
  console.log("Simulating token liquidity...");

  const poolSize = 100000;
  const reserves = 50000;
  const tradeSize = 1000;

  const liquidity = analyzeLiquidity(poolSize, reserves);
  const impact = calculatePriceImpact(tradeSize, poolSize);

  console.log("Liquidity Ratio:", liquidity.liquidityRatio.toFixed(2));
  console.log("Estimated Price Impact:", impact.toFixed(2) + "%");
}
