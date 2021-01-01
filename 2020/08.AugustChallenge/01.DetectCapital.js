var detectCapitalUse = function(word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};

console.log(detectCapitalUse('USA')) // true
console.log(detectCapitalUse('Google')) // true
console.log(detectCapitalUse('leetcode')) // true
console.log(detectCapitalUse('FlaG')) // false