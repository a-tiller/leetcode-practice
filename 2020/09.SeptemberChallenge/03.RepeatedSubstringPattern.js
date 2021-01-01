var repeatedSubstringPattern = function(s) {
  const stop = Math.floor(s.length / 2) + 1;
  for (let i = 1; i < stop; i++)   {
    if (s.length % i === 0) {
      if (s.slice(0, i).repeat(s.length / i) === s) return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
console.log(repeatedSubstringPattern('ab')); // false
console.log(repeatedSubstringPattern('a')); // false
console.log(repeatedSubstringPattern('')); // false