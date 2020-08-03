var isPalindrome = function(s) {
  const sanitized = s.toLowerCase().split(/[^a-z0-9]/).join('');

  let j = sanitized.length - 1;

  for (let i = 0; i < j; i++) {
    if (sanitized[i] !== sanitized[j]) {
      return false;
    }
    j--;
  }

  return true;
};

// let str = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(str))

// str = "race a car"
// console.log(isPalindrome(str))