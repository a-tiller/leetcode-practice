/**
 * Initialize your data structure here.
 */
var MyHashSet = function(size = 1000) {
  this.size = size;
  this.data = new Array(size).fill(false).map(() => []);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let bucket = this.data[key % this.size];
  if (!bucket.includes(key)) {
    bucket.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let bucket = this.data[key % this.size];
  let index = bucket.indexOf(key);

  if (index > -1) {
    bucket.splice(index, 1);
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let bucket = this.data[key % this.size];
  return bucket.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */