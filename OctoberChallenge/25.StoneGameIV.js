var winnerSquareGame = function(n) {
  const dp = new Array(n + 1).fill(false);

  for(let i = 1; i < dp.length; i++) {
    for (let j = Math.floor(Math.sqrt(i)); j > 0; j--) {
      if (!dp[i - (j * j)]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

console.log(winnerSquareGame(1)) // true
console.log(winnerSquareGame(2)) // false
console.log(winnerSquareGame(4)) // true
console.log(winnerSquareGame(7)) // false
console.log(winnerSquareGame(17)) // false
console.log(winnerSquareGame(8359)) // false
