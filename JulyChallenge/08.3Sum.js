var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }

  const triples = [];

  const check = (matrix, array) => {
    for (let i = 0; i < matrix.length; i++) {
      const member = matrix[i];
      let matchCount = 0;
      for (let j = 0; j < 3; j++) {
        if (member[j] === array[j]) {
          matchCount++;
        } else {
          break;
        }
      }
      if (matchCount === 3) {
        return true;
      }
    }

    return false;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const candidate = [nums[i], nums[j], nums[k]].sort();
          if (!check(triples, candidate)) {
            triples.push(candidate);
          }
        }
      }
    }
  }
  return triples;
};
