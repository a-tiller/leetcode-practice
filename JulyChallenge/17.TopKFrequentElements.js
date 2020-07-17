var topKFrequent = function(nums, k) {
  const counts = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  }

  let countArray = [...counts];

  countArray.sort((a, b) => (b[1] - a[1]));

  const results = [];

  for (let j = 0; j < k; j++) {
    results.push(countArray[j][0]);
  }

  return results;
};
