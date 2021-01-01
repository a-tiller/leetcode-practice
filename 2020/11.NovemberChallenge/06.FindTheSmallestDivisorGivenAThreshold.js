var smallestDivisor = function(nums, threshold) {
  let min = 1;
  // nums.sort((a,b) => (a - b)); // examples are all pre-sorted, but no guarantee in problem statement
  let max = nums[nums.length - 1];

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    const divSum = nums.reduce((a, v) => (a + Math.ceil(v / mid)), 0);

    if (divSum <= threshold) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return max;
};

let testNums = [2,3,5,7,11];
let testThresh = 11;
console.log(smallestDivisor(testNums, testThresh)) // 3