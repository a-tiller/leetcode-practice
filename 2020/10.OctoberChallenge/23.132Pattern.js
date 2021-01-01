var find132pattern = function(nums) {
  let pos = nums.length

  while (pos--) {
    let second = -Infinity;
    let max = nums[pos];

    for (let i = pos - 1; i >= 0; i--) {
      const num = nums[i];

      if (num < second) return true;

      if (num > max) {
          second = max;
          max = num;
      }
    }
  }

  return false;

};