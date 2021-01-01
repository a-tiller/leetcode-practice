var numSubarrayProductLessThanK = function(nums, k) {
  if (k === 0) return 0;

  let result = 0;
  let product = 1;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    while (product >= k && start <= i) {
      product /= nums[start];
      start++;
    }
    result += i - start + 1;
  }

  return result;
};

let nums = [10, 5, 2, 6];
let k = 100;
console.log(numSubarrayProductLessThanK(nums, k)) // 8

nums = [10, 5, 2, 6];
k = 0;
console.log(numSubarrayProductLessThanK(nums, k)) // 0

nums = [1, 1, 1];
k = 1;
console.log(numSubarrayProductLessThanK(nums, k)) // 0