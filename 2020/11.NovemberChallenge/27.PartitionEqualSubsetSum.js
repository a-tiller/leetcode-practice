var canPartition = function(nums) {
  const total = nums.reduce((sum, value) => (sum + value));

  if (total % 2 === 1) return false;

  const target = total / 2;
  const possibleSubsetSums = new Array(target).fill(false);
  possibleSubsetSums.unshift(true);

  nums.forEach((number) => {
    for (let i = possibleSubsetSums.length - 1; i >= number; i--) {
      possibleSubsetSums[i] |= possibleSubsetSums[i - number];
    }
  });

  return possibleSubsetSums[target];
};