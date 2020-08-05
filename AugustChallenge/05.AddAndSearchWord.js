/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.memo = new Set();
  this.searchable = new Map();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (!this.memo.has(word)) {
    this.memo.add(word);
    if (this.searchable.has(word.length)) {
      this.searchable.get(word.length).push(word)
    } else {
      this.searchable.set(word.length, [word]);
    }
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if (this.memo.has(word)) {
    return true;
  }

  if (this.searchable.has(word.length)) {
    const wordBank = this.searchable.get(word.length)

    let hasMatch = wordBank.reduce((match, w) => {
      if (match) {
        return true;
      }

      for (let i = 0; i < w.length; i++) {
        if (word[i] === '.' || word[i] === w[i]) {
          continue;
        }
        return false
      }

      return true;
    }, false);

    if (hasMatch) {
      this.memo.add(word);
      return true;
    }
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */