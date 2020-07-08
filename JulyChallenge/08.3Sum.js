var threeSum = function(nums) {
  const triples = [];

  if (nums.length < 3) {
    return triples;
  }

  const counts = new Map();

  const sorted = [...nums].sort((a,b) => (a - b));

  for (let i = 0; i < sorted.length; i++) {
    const digit = sorted[i]
    if (counts.has(digit)) {
      counts.set(digit, counts.get(digit) + 1);
    } else {
      counts.set(digit, 1);
    }
  }

  for (let [firstKey, firstVal] of counts) {
    if (firstKey > 0) continue;

    counts.set(firstKey, firstVal - 1);
    for (let [secondKey, secondVal] of counts) {
      if (secondKey >= firstKey && secondVal > 0) {
        counts.set(secondKey, secondVal - 1);
        const sum = firstKey + secondKey;

        if (counts.has(-sum) && counts.get(-sum) > 0 && -sum >= secondKey) {
          triples.push([firstKey, secondKey, -sum]);
        }
        counts.set(secondKey, secondVal);
      }
    }
    counts.set(firstKey, firstVal);
  }

  return triples;
};
