var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let n = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[n]) {
      n++;
      nums[n] = nums[i];
    }
  }

  return n + 1;
};