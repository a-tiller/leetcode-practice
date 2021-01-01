var findTheDifference = function(s, t) {
  let char = 0;

  for(let i = 0; i < t.length; i++) {
    char ^= t.charCodeAt(i);
  }

  for(let i = 0; i < s.length; i++) {
    char ^= s.charCodeAt(i);
  }

  return String.fromCharCode(char);
};

let s = "abcd"
let t = "abcde"
console.log(findTheDifference(s, t));

s = "a"
t = "aa"
console.log(findTheDifference(s, t));