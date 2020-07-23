var singleNumber = function(nums) {
  const numHash = new Set ();

  nums.forEach((num) => {
    if (!numHash.delete(num)) {
      numHash.add(num);
    }
  });

  return [...numHash];
};
