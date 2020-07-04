var nthUglyNumber = function(n) {
  const sortedUglies = [1];
  let lastUsedTwos = 0;
  let lastUsedThrees = 0;
  let lastUsedFives = 0;

  while (sortedUglies.length < n) {

    const uglyNumber = Math.min(2 * sortedUglies[lastUsedTwos], 3 * sortedUglies[lastUsedThrees], 5 * sortedUglies[lastUsedFives]);

    sortedUglies.push(uglyNumber);

    if (uglyNumber === 2 * sortedUglies[lastUsedTwos]) {
      lastUsedTwos++;
    }

    if (uglyNumber === 3 * sortedUglies[lastUsedThrees]) {
      lastUsedThrees++;
    }

    if (uglyNumber === 5 * sortedUglies[lastUsedFives]) {
      lastUsedFives++;
    }
  }

  return sortedUglies[n - 1];
};

