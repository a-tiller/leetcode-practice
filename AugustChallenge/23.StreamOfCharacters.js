class Trie {
  constructor(){
    this.letters = new Map();
    this.isWord = false;
  }

  add(word) {
    let pointer = this;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!pointer.letters.has(char)) {
        pointer.letters.set(char, new Trie());
      }
      pointer = pointer.letters.get(char);
    }
    pointer.isWord = true;
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.dict = new Trie();
  this.pointers = [];

  words.forEach((word) => (this.dict.add(word)));
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  let result = false;
  const newPointers = []

  this.pointers.forEach((pointer) => {
    if (pointer.letters.has(letter)) {
      pointer = pointer.letters.get(letter);
      newPointers.push(pointer);
      if (pointer.isWord) {
        result = true;
      }
    }
  });

  if (this.dict.letters.has(letter)) {
    const pointer = this.dict.letters.get(letter);
    newPointers.push(pointer);
    if (pointer.isWord) {
      result = true;
    }
  }

  this.pointers = newPointers;

  return result;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

// const test = new StreamChecker(["cd","f","kl"]); // init the dictionary.
// console.log(test.query('a'));          // return false
// console.log(test.query('b'));          // return false
// console.log(test.query('c'));          // return false
// console.log(test.query('d'));          // return true, because 'cd' is in the wordlist
// console.log(test.query('e'));          // return false
// console.log(test.query('f'));          // return true, because 'f' is in the wordlist
// console.log(test.query('g'));          // return false
// console.log(test.query('h'));          // return false
// console.log(test.query('i'));          // return false
// console.log(test.query('j'));          // return false
// console.log(test.query('k'));          // return false
// console.log(test.query('l'));          // return true, because 'kl' is in the wordlist
