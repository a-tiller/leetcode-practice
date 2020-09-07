var wordPattern = function(pattern, str) {
  const patternToWord = {};
  const usedWords = {};
  const strArray = str.split(' ');

  if (pattern.length !== strArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strArray[i];
    if (!patternToWord.hasOwnProperty(char)) {
      if (usedWords.hasOwnProperty(word)) return false;
      patternToWord[char] = word
      usedWords[word] = true;
    } else if (patternToWord[char] !== word) {
      return false;
    }
  }

  return true
};

let testPattern = '';
let testsStr = '';
console.log(wordPattern(testPattern, testsStr)); // false

testPattern = 'abba';
testsStr = 'dog cat cat dog';
console.log(wordPattern(testPattern, testsStr)); // true

testPattern = 'abba';
testsStr = 'dog cat cat fish';
console.log(wordPattern(testPattern, testsStr)); // false

testPattern = 'aaaa';
testsStr = 'dog cat cat dog';
console.log(wordPattern(testPattern, testsStr)); // false

testPattern = 'abba';
testsStr = 'dog dog dog dog';
console.log(wordPattern(testPattern, testsStr)); // false


