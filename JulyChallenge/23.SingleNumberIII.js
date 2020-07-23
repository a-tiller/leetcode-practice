var singleNumber = function(nums) {
  const xyDiff = nums.reduce((a, v) => (a ^ v));

  const bit = xyDiff & ~(xyDiff - 1);

  const x = nums.reduce((a, v) => (v & bit ? a ^ v : a), 0);

  return [x, x ^ xyDiff];
};
