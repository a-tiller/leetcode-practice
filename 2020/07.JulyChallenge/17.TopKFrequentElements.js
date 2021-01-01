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

  const buckets = new Array(nums.length + 1).fill(0).map(() => []);

  counts.forEach((count, num) => { buckets[count].push(num) });

  const results = [];
  let counter = buckets.length - 1;

  while (results.length < k) {
    if (buckets[counter].length > 0) {
      results.push(...buckets[counter]);
    }
    counter--;
  }

  return results.slice(0, k);
};
