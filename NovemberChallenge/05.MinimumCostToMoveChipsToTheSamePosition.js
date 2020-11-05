var minCostToMoveChips = function(position) {
  const chips = new Map();

  position.forEach((pos) => {
    if (chips.has(pos)) {
      chips.set(pos, chips.get(pos) + 1);
    } else {
      chips.set(pos, 1);
    }
  });


  let minCost = Infinity;

  chips.forEach((_, to) => {
    let cost = 0;

    chips.forEach((_, from) => {
      cost += (Math.abs(from - to) % 2) * chips.get(from);
    });

    minCost = Math.min(minCost, cost);
  });

  return minCost;
};