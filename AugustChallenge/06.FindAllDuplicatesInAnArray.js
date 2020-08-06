var findDuplicates = function(nums) {
  const results = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (!results.delete(nums[i])) {
      results.add(nums[i]);
    }
  }

  return [...results];
};

let test;

test = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(test)) // [2, 3]