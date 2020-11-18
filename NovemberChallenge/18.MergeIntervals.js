var merge = function(intervals) {

  intervals.sort((a,b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  const results = [];
  let position = 0;

  while (position < intervals.length) {
    const merged = [...intervals[position]]
    position++;

    while(position < intervals.length && intervals[position][0] <= merged[1]) {
      merged[1] = Math.max(intervals[position][1], merged[1]);
      position++;
    }

    results.push(merged);
  }

  return results;
};