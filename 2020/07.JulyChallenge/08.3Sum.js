var threeSum = function(nums) {
  const triples = [];

  if (nums.length < 3) {
    return triples;
  }

  const sorted = [...nums].sort((a,b) => (a - b));

  for (let i = 0; sorted[i] <= 0 && i < sorted.length - 2; i++) {
    let start = i + 1
    let end = sorted.length - 1;

    while (start < end) {
      const sum = sorted[i] + sorted[start] + sorted[end];

      if (sum === 0) {
        triples.push([sorted[i], sorted[start], sorted[end]]);
        while (sorted[start] === sorted[start + 1]) {
          start++;
        }
        start++;
      }

      if (sum > 0) {
        end--;
      }

      if (sum < 0) {
        start++;
      }
    }

    while (sorted[i] === sorted[i + 1]) {
      i++;
    }
  }

  return triples;
};
