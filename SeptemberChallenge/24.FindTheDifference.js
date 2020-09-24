var findTheDifference = function(s, t) {
  const tMap = {};

  for(let i = 0; i < t.length; i++) {
    if (!tMap.hasOwnProperty(t[i])) tMap[t[i]] = 1;
    else tMap[t[i]]++;
  }

  for(let i = 0; i < s.length; i++) {
    tMap[s[i]]--;
  }

  for (const key in tMap) {
    if (tMap[key]) return key;
  }
};

let s = "abcd"
let t = "abcde"
console.log(findTheDifference(s, t));

s = "a"
t = "aa"
console.log(findTheDifference(s, t));