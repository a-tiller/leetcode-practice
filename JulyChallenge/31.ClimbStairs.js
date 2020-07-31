var climbStairs = function(n) {
  let pp = 0;
  let p = 0;
  let c = 1;
  let i = n;

  while (i > 0) {
    pp = p;
    p = c;
    c = p + pp;
    i--;
  }

  return c;
};

// console.log(climbStairs(1)) // 1
// console.log(climbStairs(2)) // 2
// console.log(climbStairs(3)) // 3
// console.log(climbStairs(43)) // 701408733