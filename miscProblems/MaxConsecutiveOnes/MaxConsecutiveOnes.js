var findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      if (counter > result) {
        result = counter;
      }
      continue;
    }
    counter = 0;
  }

  return result;
};

const arr = [1,1,0,1,0,1,1];
console.log(findMaxConsecutiveOnes(arr));
