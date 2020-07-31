var climbStairs = function(n) {
  const steps = new Array(n + 2).fill(0);
  steps.unshift(1)

  const moves = [1, 2];

  for (let i = 0; i < steps.length - 2; i++) {
    moves.forEach(move => {
      steps[i + move] += steps[i];
    })
  }
  return steps[n]
};

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(43)) // 701408733