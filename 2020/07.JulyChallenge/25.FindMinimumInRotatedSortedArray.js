var findMin = function(nums) {
  let bot = 0;
  let top = nums.length - 1;

  while (bot <= top) {
    const mid = Math.floor((bot + top) / 2);

    if (nums[mid] < nums[top]) {
      top = mid;
    } else if (nums[mid] > nums[top]) {
      bot = mid + 1;
    } else {
      top--;
    }
  }

  return nums[bot];
};

// console.log(findMin([2,2,2,0,1])) // 0
// console.log(findMin([1,3,5])) // 1
// console.log(findMin([1,0])) // 0
// console.log(findMin([2,1,2,2,2])) // 1
// console.log(findMin([0,0])) // 0
// console.log(findMin([2,2,2,1,2])) // 1
// console.log(findMin([1,2,2,2,0,1,1])) // 0
// console.log(findMin([1])) // 1
// console.log(findMin([2,2,2,0,0,1])) // 0
// console.log(findMin([4,5,6,7,0,1,2])) // 0
