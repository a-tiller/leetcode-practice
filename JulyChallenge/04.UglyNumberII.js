var nthUglyNumber = function(n) {
  const sortedUglies = [];
  const byTwos = [];
  const byThrees = [];
  const byFives = [];
  let current = 1;

  while (sortedUglies.length < n) {

    sortedUglies.push(current)
    byTwos.push(current * 2);
    byThrees.push(current * 3);
    byFives.push(current * 5);

    const min = Math.min(byTwos[0], byThrees[0], byFives[0])

    if (byTwos[0] === min) {
      current = byTwos.shift();
    }

    if (byThrees[0] === min) {
      current = byThrees.shift();
    }

    if (byFives[0] === min) {
      current = byFives.shift();
    }
  }

  console.log(sortedUglies)

  return sortedUglies[n - 1];
};

console.log(nthUglyNumber(100));
