var longestPalindrome = function(s) {
  let result = 0;
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    if (seen.delete(s[i])) {
      result += 2;
    } else {
      seen.add(s[i]);
    }
  }

  return seen.size ? result + 1 : result;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("aA")); // 1
console.log(longestPalindrome("aabb")) // 4
