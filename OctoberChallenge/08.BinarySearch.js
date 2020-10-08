var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let current = -1;

  while (min <= max) {
    current = Math.floor((min + max) / 2);
    const num = nums[current];

    if (num === target) return current;
    else if (target > num) min = current + 1;
    else max = current - 1;
  }

  return -1;
};

let testNums = [];
let testTarget = 0;
console.log(search(testNums, testTarget)) // -1

testNums = [-1,0,3,5,9,12];
testTarget = 9;
console.log(search(testNums, testTarget)) // 4

testNums = [-1,0,3,5,9,12];
testTarget = 2;
console.log(search(testNums, testTarget)) // -1