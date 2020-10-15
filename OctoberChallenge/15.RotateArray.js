var rotate = function(nums, k) {
  k = k % nums.length;

  while (k--) {
    nums.unshift(nums.pop());
  }
};