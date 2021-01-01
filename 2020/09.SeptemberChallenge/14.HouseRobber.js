var rob = function(nums) {
  const len = nums.length;
  const dp = new Array(len);

  for (let i = 0; i < len; i++) {
    dp[i] = Math.max(nums[i] + (dp[i - 2] || 0), dp[i - 1] || 0);
  }
  return dp[len - 1] || 0;
};

let n = [];
console.log(rob(n)); // 0

n = [1,2,3,1];
console.log(rob(n)); // 4

n = [2,7,9,3,1];
console.log(rob(n)); // 12
