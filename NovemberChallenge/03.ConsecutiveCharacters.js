var maxPower = function(s) {
  let current = 0;
  let max = 0;
  for (let i = 0; i < s.length - 1; i++)   {
    if (s[i] === s[i + 1]) {
      current++;
      max = Math.max(current, max);
    } else {
      current = 0;
    }
  }

  return max + 1;
};