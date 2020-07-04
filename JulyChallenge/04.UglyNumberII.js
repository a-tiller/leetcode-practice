var nthUglyNumber = function(n) {
  const sortedUglies = [];
  const bigArray = [1];
  let position = 0;

  while (sortedUglies.length < n) {
    let m = bigArray[position];
    if (m !== undefined) {
      sortedUglies.push(m);
      bigArray[m * 2] = m * 2;
      bigArray[m * 3] = m * 3;
      bigArray[m * 5] = m * 5;
    }

    position++;
  }

  return sortedUglies[n - 1];
};
