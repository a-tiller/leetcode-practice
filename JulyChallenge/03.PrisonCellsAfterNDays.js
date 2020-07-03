
var prisonAfterNDays = function(cells, N) {

  if (N === 0) return cells;

  const nextDay = (array) => {
    const next = [0];

    for (let i = 1; i < array.length - 1; i++) {
      if (array[i - 1] === array[i + 1]) {
        next.push(1);
      } else {
        next.push(0);
      }
    }

    next.push(0);

    return next;
  }

  const cycle = [nextDay(cells)];
  let current = nextDay(cycle[0]);


  while (current.join('') !== cycle[0].join('')) {
    cycle.push(current);
    current = nextDay(current);
  }


  if (N % cycle.length) {
    return cycle[(N % cycle.length) - 1];
  }

  return cycle[cycle.length - 1];
};
