var singleNumber = function(nums) {
  const xyDiff = nums.reduce((a, v) => (a ^ v));

  const splitter = xyDiff & ~(xyDiff - 1);

  return nums.reduce((a, v) => {
    if (v & splitter) {
      a[0] ^= v;
    } else {
      a[1] ^= v;
    }

    return a;
  }, [0, 0]);

};
