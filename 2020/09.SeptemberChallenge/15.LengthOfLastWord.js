var lengthOfLastWord = function(s) {
  let counter = 0;
  // let end = s.length - 1;
  // while (s[end] === ' ') {
  //   end--;
  // }
  s = s.trim()
  for (let i = /* end */s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') break;
    counter++;
  }

  return counter;
};