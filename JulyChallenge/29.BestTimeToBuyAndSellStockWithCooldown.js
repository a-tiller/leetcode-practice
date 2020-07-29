var maxProfit = function(prices) {
  const length = prices.length;
  if (length === 0) return 0;

  let ready = [0];
  let hold = [-prices[0]]
  let cooldown = [null]

  for (let i = 1; i < prices.length; i++) {
    ready.push(Math.max(cooldown[i - 1], ready[i - 1]));
    hold.push(Math.max(hold[i - 1], ready[i - 1] - prices[i]));
    cooldown.push(hold[i - 1] + prices[i]);
  }

  return Math.max(ready[length - 1], cooldown[length - 1]);
};

// console.log(maxProfit([1,2,3,0,2])) // 3

// console.log(maxProfit([2,1,2,0,1])) // 1

// console.log(maxProfit([1,2])) // 1

// console.log(maxProfit([3,2,6,5,0,3])) // 7

// console.log(maxProfit([6,1,3,2,4,7])) // 6

// console.log(maxProfit([8,6,4,3,3,2,3,5,8,3,8,2,6])) // 10

// console.log(maxProfit([])) // 0