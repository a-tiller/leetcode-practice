var findDuplicates = function(nums) {
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      results.push(Math.abs(nums[i]))
    }

    nums[Math.abs(nums[i]) - 1] *= -1;
  }

  return results;
};

let test;

test = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(test)) // [2, 3]