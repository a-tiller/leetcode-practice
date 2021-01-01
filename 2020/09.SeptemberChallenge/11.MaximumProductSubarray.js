var maxProduct = function(nums) {
  if (!nums.length) return 0;

  let result = -Infinity;
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    product *= num;
    result = Math.max(result, product);
    if (num === 0) product = 1;
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    product *= num;
    result = Math.max(result, product);
    if (num === 0) product = 1;
  }

  return result;
};