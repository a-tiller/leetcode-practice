/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.store = [];
  this.place = 0;

  if (combinationLength === 1) {
    this.store = characters.split('');
  } else if (combinationLength > 1) {
    for (let i = 0; i <= characters.length - combinationLength; i++){
        const further = new CombinationIterator(characters.slice(i + 1), combinationLength - 1);
        const candidates = further.store.map(combination => (characters[i] + combination));
        this.store = this.store.concat(candidates);
    }
  }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  const combination = this.store[this.place];
  this.place++;
  return combination;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.place < this.store.length;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
