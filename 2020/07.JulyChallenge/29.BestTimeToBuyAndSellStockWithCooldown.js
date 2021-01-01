var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let ready = 0;
  let hold = -prices[0]
  let cooldown = 0

  for (let i = 1; i < prices.length; i++) {
    let prevCD = cooldown;
    cooldown = hold + prices[i];
    hold = Math.max(hold, ready - prices[i]);
    ready= Math.max(prevCD, ready);
  }

  return Math.max(ready, cooldown);
};

// console.log(maxProfit([1,2,3,0,2])) // 3

// console.log(maxProfit([2,1,2,0,1])) // 1

// console.log(maxProfit([1,2])) // 1

// console.log(maxProfit([3,2,6,5,0,3])) // 7

// console.log(maxProfit([6,1,3,2,4,7])) // 6

// console.log(maxProfit([8,6,4,3,3,2,3,5,8,3,8,2,6])) // 10

// console.log(maxProfit([])) // 0