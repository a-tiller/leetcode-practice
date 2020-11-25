var smallestRepunitDivByK = function(K) {
  let length = 1;
  let remainder = length % K;

  let seen = new Set();

  while(remainder) {
    length++;
    seen.add(remainder);
    remainder = (remainder * 10 + 1) % K;
    if (seen.has(remainder)) return -1;
  }

  return length;
};