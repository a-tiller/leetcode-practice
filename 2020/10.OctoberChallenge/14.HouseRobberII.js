var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  let prev = 0;
  let res1 = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    [prev, res1] = [res1, Math.max(prev + nums[i], res1)];
  }

  let res2 = 0;
  prev = 0;

  for (let i = 1; i < nums.length; i++) {
    [prev, res2] = [res2, Math.max(prev + nums[i], res2)];
  }

  return Math.max(res1, res2);
};