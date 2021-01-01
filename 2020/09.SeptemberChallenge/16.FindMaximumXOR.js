var findMaximumXOR = function(nums) {
  let res = 0;

  const maxNum = Math.max(...nums);
  let highestBit = -1;

  for (let i = maxNum; i > 0; i >>= 1) {
    highestBit++;
  }

  const mask = 1 << highestBit;

  const candidates = nums.filter((num) => (num & mask));
  candidates.forEach((candidate) => {
    for (let i = 0; i < nums.length; i++) {
      const xor = candidate ^ nums[i];
      if (xor > res) res = xor;
    }
  })

  return res;
};

let test = [];
console.log(findMaximumXOR(test));

test = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(test)); // 28