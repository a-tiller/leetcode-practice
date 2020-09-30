var firstMissingPositive = function(nums) {
  if (!nums.length) return 1;

  nums.push(-1);

  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];

    while(index !== null && index < nums.length && index > 0) {
      [index, nums[index]] = [nums[index], null];
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== null) return i;
  }

  return nums.length;
};

let testNums = [];
console.log(firstMissingPositive(testNums)) // 1

testNums = [1,2,0];
console.log(firstMissingPositive(testNums)) // 3

testNums = [3,4,-1,1];
console.log(firstMissingPositive(testNums)) // 2

testNums = [7,8,9,11,12];
console.log(firstMissingPositive(testNums)) // 1

testNums = [1];
console.log(firstMissingPositive(testNums)) // 2
