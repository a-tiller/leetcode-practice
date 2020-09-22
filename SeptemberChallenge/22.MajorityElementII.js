var majorityElement = function(nums) {
  const results = [];
  const limit = Math.min(nums.length / 3);

  const counts = {};

  nums.forEach(num => {
    if (!counts.hasOwnProperty(num)) counts[num] = 0;
    counts[num]++;
  })

  for (const num in counts) {
    if (counts[num] > limit) results.push(num);
  }

  return results;
};