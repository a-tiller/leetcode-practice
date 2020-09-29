var wordBreak = function(s, wordDict) {
  class trieDict {
    constructor(dictionary = []) {
      this.isWord = false;
      this.letters = {};

      dictionary.forEach(word => {
        if (!this.parseString(word)) {
          this.add(word);
        }
      });
    }

    add(s) {
      let current = this;

      while (s.length) {
        if (!current.letters.hasOwnProperty(s[0])) current.letters[s[0]] = new trieDict();

        current = current.letters[s[0]];
        s.length === 1 ? s = "" : s = s.slice(1);
      }

      current.isWord = true;
    }

    parseString(s) {
      const dp = new Array(s.length).fill(false);
      dp.unshift(true);

      for (let i = 0; i < s.length; i++) {
        if (dp[i]) {
          let pointer = i;
          let current = this;
          while (true) {
            if (current.isWord) dp[pointer] = true;
            if (current.letters.hasOwnProperty(s[pointer])) {
              current = current.letters[s[pointer]];
              pointer++;
            }
            else break;
          }
        }
      }

      return dp[dp.length - 1];
    }
  }

  let dict = new trieDict(wordDict);

  return dict.parseString(s);
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

