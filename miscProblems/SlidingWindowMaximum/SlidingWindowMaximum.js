var maxSlidingWindow = function(nums, k) {
  const queue = [];

  const updateQ = (value, index) => {
    if (queue.length !== 0 && queue[0] === index - k) {
      queue.shift();
    }

    while (queue.length !== 0 && value >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(index);
  }

  for (let i = 0; i < k; i++ ) {
    const num = nums[i]
    updateQ(num, i)
  }

  const result = [nums[queue[0]]];

  for (let i = k; i < nums.length; i++) {
    const val = nums[i];
    updateQ(val, i);
    result.push(nums[queue[0]]);
  }

  return result;
};

// let nums = [9,10,9,-7,-4,-8,2,-6];
// let k = 5;

// console.log(maxSlidingWindow(nums, k)); // [10, 10, 9, 2]