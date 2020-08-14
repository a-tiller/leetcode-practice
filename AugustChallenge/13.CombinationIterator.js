/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  function* generateCombinations(prefix, firstAvailable) {
    if (prefix.length === combinationLength) {
      yield prefix;
      return;
    }

    for (let i = firstAvailable; i < characters.length - combinationLength + prefix.length + 1; i++) {
      yield* generateCombinations(prefix + characters[i], i + 1);
    }
  }

  this.iterator = generateCombinations('', 0);
  this.current = this.iterator.next();
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  const { value } = this.current;

  this.current = this.iterator.next();

  return value;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.current.done === false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
