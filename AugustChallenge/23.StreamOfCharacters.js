class Trie {
  constructor(){
    this.letters = {};
    this.isWord = false;
  }

  add(word) {
    let pointer = this;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!pointer.letters.hasOwnProperty(char)) {
        pointer.letters[char] = new Trie();
      }
      pointer = pointer.letters[char];
    }
    pointer.isWord = true;
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.dict = new Trie();
  this.stream = [];
  this.depth = 0;

  words.forEach((word) => {
    this.depth = Math.max(this.depth, word.length);
    this.dict.add(word.split('').reverse().join(''))
  });
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  let current = this.dict;

  this.stream.unshift(letter);
  if (this.stream.length > this.depth) this.stream.pop();

  for (let i = 0; i < this.depth; i++) {
    const char = this.stream[i];
    if (!current.letters.hasOwnProperty(char)) {
      return false;
    }
    current = current.letters[char];
    if (current.isWord) return true;
  }
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

const test = new StreamChecker(["cd","f","kl"]); // init the dictionary.
console.log(test.query('a'));          // return false
console.log(test.query('b'));          // return false
console.log(test.query('c'));          // return false
console.log(test.query('d'));          // return true, because 'cd' is in the wordlist
console.log(test.query('e'));          // return false
console.log(test.query('f'));          // return true, because 'f' is in the wordlist
console.log(test.query('g'));          // return false
console.log(test.query('h'));          // return false
console.log(test.query('i'));          // return false
console.log(test.query('j'));          // return false
console.log(test.query('k'));          // return false
console.log(test.query('l'));          // return true, because 'kl' is in the wordlist
