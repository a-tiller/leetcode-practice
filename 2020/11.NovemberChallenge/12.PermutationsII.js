var permuteUnique = function(nums) {
  const results = [];
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (seen.has(num)) continue;
    seen.add(num);

    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)]
    const further = permuteUnique(rest);

    if (!further.length) results.push([num]);

    further.forEach(permutation => {
      results.push([num, ...permutation]);
    });
  }

  return results;
};