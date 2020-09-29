var wordBreak = function(s, wordDict) {
  class trieDict {
    constructor(dictionary = []) {
      this.isWord = false;
      this.letters = {};
      this.knownBad = new Set();

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
      if (this.knownBad.has(s)) return false;

      let current = this;

      for (let i = 0; i < s.length; i++) {
        if (current.isWord) {
          if (this.parseString(s.slice(i))) return true
          else this.knownBad.add(s.slice(i));
        }

        if (current.letters.hasOwnProperty(s[i])) {
          current = current.letters[s[i]];
        } else {
          return false;
        }
      }

      return current.isWord;
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

