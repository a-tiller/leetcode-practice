/**
 * Initialize your data structure here.
 */

var Trie = function() {
  this.letters = new Map();
  this.wordEnd = false;
}

var WordDictionary = function() {
  this.words = new Trie();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let current = this.words;

  for (let i = 0; i < word.length; i++) {
    if (!current.letters.has(word[i])) {
      current.letters.set(word[i], new Trie());
    }
    current = current.letters.get(word[i])
  }

  current.wordEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (w, trie) => {
    if (w.length === 0) {
      return trie.wordEnd;
    }

    if (w[0] === '.') {
      let found = false;
      trie.letters.forEach((t) => {
        found = found || dfs(w.substring(1), t)
      })

      return found;
    }

    if (trie.letters.has(w[0])) {
      return dfs(w.substring(1), trie.letters.get(w[0]));
    }

    return false;
  }

  return dfs(word, this.words);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */