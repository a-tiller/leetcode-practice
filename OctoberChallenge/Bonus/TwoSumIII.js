/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.nums = new Map();

};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  if (!this.nums.has(number)) this.nums.set(number, 1);
  else this.nums.set(number, 2);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  let found = false;

  this.nums.forEach((count, num) => {
    if (!found) {
      const compliment = value - num;
      if (num === compliment) found = count > 1;
      else found = this.nums.get(compliment);
    }
  });

  return found;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */