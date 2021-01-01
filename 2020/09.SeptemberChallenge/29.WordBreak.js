var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue;
    wordDict.forEach(word => {
      if (s.slice(i, i + word.length) === word) dp[i + word.length] = true;
    });
  }

  return dp[s.length];
};

let testDict = [];
let testS = "";

testDict = ["leet", "code"];
testS = "leetcode";
console.log(wordBreak(testS, testDict)) // true

testDict = ["apple", "pen"];
testS = "applepenapple";
console.log(wordBreak(testS, testDict)) // true

testDict = ["cats", "dog", "sand", "and", "cat"];
testS = "catsandog";
console.log(wordBreak(testS, testDict)) // false

testDict = ["aaaa","aa"];
testS = "aaaaaaa";
console.log(wordBreak(testS, testDict)) // false

testDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];
testS = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
console.log(wordBreak(testS, testDict)) // false


testDict = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"];
testS = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
console.log(wordBreak(testS, testDict)) // false

