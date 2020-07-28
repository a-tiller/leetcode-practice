var maxSlidingWindow = function(nums, k) {
  let result = nums.slice(0, nums.length - k + 1);

  for (let i = 1; i < k; i++) {
    result = result.map((value, index) => {
      return Math.max(value, nums[index + i])
    })
  }

  return result;
};

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;

console.log(maxSlidingWindow(nums, k));