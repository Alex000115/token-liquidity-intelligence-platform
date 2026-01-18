export function simulateVolumeFlow(volume, interval) {
  return {
    interval,
    volume,
    averagePerInterval: interval === 0 ? 0 : volume / interval
  };
}
