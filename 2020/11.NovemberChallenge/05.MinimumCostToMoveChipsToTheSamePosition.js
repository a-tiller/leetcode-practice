var minCostToMoveChips = function(position) {
  const parity = [0,0];
  position.forEach(pos => parity[pos % 2]++);
  return Math.min(...parity);
};