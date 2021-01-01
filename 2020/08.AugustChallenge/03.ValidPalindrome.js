var isPalindrome = function(s) {

  const isAlphaNumeric = c => c.match(/[A-Za-z0-9]/);

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if(!isAlphaNumeric(s[l])) {
      l++;
      continue;
    }

    if(!isAlphaNumeric(s[r])) {
      r--;
      continue;
    }

    if (s[l] === s[r] || s[l].toLowerCase() === s[r].toLowerCase()) {
      l++;
      r--;
      continue;
    }

    return false;
  }

  return true;
};

// let str = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(str))

// str = "race a car"
// console.log(isPalindrome(str))

// str = "0P"
// console.log(isPalindrome(str))

// str = "00"
// console.log(isPalindrome(str))

// str = ",."
// console.log(isPalindrome(str))

