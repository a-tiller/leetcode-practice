var rotate = function(nums, k) {
  k = k % nums.length;

  flip(nums, 0, nums.length - 1);
  flip(nums, 0, k - 1);
  flip(nums, k, nums.length - 1);
};

const flip = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};