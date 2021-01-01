/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let pairs = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (pairs[needed] !== undefined) {
      return [pairs[needed], i];
    }

    pairs[nums[i]] = i;
  }
};