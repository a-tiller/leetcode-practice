var removeDuplicates = function(nums) {
  for (let i = nums.length - 1; nums[i] >= nums[i - 1]; i = nums.length - 1) {
    const lastEl = nums.pop();

    if (lastEl !== nums[0]) {
      nums.unshift(lastEl);
    }
  }

  const lastEl = nums.pop();

  if (lastEl !== nums[0]) {
    nums.unshift(lastEl);
  }

  return nums.length;
};