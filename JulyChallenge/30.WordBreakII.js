var wordBreak = function(s, wordDict) {

  const buildTrie = (dictionary) => {
    const trie = new Map();
    const letters = new Set();

    dictionary.forEach((word) => {
      let current = trie;

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        letters.add(char);

        if (!current.has(char)) {
          current.set(char, new Map());
        }
        current = current.get(char)
      }

      current.set('!', ' ');
    });

    trie.set('letters', letters);
    return trie;
  };

  const trieWalk = (dictionary, string, currentDict = null, sentence = "", word = "") => {
    let results = [];

    if (!currentDict) {
      currentDict = dictionary;
    }

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (!currentDict.has(char)) {
        return results;
      }

      word += char;
      currentDict = currentDict.get(char);

      if (currentDict.has('!')) {
        if (i < string.length - 1) {
          let branch = trieWalk(dictionary, string.substring(i + 1), currentDict, sentence, word);
          results = results.concat(branch);
          word += ' ';
        }

        sentence += word;
        word = "";
        currentDict = dictionary;
      } else if (i === string.length - 1) {
        return results;
      }
    }

    results.push(sentence);
    return results.filter(string => string !== "");
  };

  const letterCheck = (trie, string) => {
    const tSet = trie.get('letters');
    const sSet = new Set(string.split(''))
    let check = true;

    sSet.forEach(letter => {
      if (!tSet.has(letter)) check = false;
    })

    return check;
  };

  const d = buildTrie(wordDict);
  if (!letterCheck(d, s)) return [];
  return trieWalk(d, s);
};

// let s = "catsanddog"
// let wordDict = ["cat", "cats", "and", "sand", "dog"]

// console.log(wordBreak(s, wordDict))

// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]

// console.log(wordBreak(s, wordDict))

// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]

// console.log(wordBreak(s, wordDict))

// s = ""
// wordDict = []

// console.log(wordBreak(s, wordDict))

// s = "aaaaaaa"
// wordDict = ["aaaa","aa"]

// console.log(wordBreak(s, wordDict))

// s = "aaaaaaa"
// wordDict = ["aaaa","aaa"]

// console.log(wordBreak(s, wordDict))

// s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

// console.log(wordBreak(s, wordDict))
