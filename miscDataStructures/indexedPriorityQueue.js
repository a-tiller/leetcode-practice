class IndexedPriorityQueue {
  constructor(iterable = [], compare = (a, b) => (a - b)) {
    this.keyIndexToLabel = [];
    this.labelToKeyIndex = new Map();

    this.values = []; // maps from key index to value
    this.positionMap = []; // maps from key index to position in the heap
    this.inverseMap = []; // maps from position in heap to key index

    this.size = 0;
    this.compare = compare;

    iterable.forEach((value, index) => {
      this.addPair(index, value);
    })
  }

  addPair(label, value) {
    this.keyIndexToLabel.push(label);
    let ki = this.keyIndexToLabel.length - 1;
    this.labelToKeyIndex.set(label, ki);
    this.insert(ki, value);
  }

  remove(ki) {
    const index = this.positionMap[ki];
    this.size--;
    this.swap(index, this.size);

    this.sink(index);
    this.swim(index);

    const value = this.valueOf(ki);
    this.values[ki] = null;
    this.positionMap[ki] = -1;
    this.inverseMap[this.size] = -1;

    return value;
  }

  valueOf(ki) {
    return this.values[ki];
  }

  peekMinKeyIndex() {
    return this.inverseMap[0];
  }

  pollMinKeyIndex() {
    let ki = this.inverseMap[0];
    this.remove(ki);
    return ki;
  }

  peekMinValue() {
    let ki = this.inverseMap[0];
    return this.valueOf(ki);
  }

  pollMinValue() {
    let ki = this.inverseMap[0];
    let value = this.valueOf(ki);
    this.remove(ki);
    return value;
  }

  insert(ki, value) {
    this.values[ki] = value;

    this.positionMap[ki] = this.size;
    this.inverseMap[this.size] = ki;
    this.swim(this.size);
    this.size++;
  }

  swim(index) {
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && this.less(index, parent)) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  sink(index) {
    while(true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = left;

      if (right < this.size && this.less(right, left)) {
        smallest = right;
      }

      if (left >= this.size || this.less(index, smallest)) break;

      this.swap(smallest, index);
      index = smallest;
    }
  }

  swap(i, j) {
    this.positionMap[this.inverseMap[j]] = i;
    this.positionMap[this.inverseMap[i]] = j;
    [this.inverseMap[i], this.inverseMap[j]] = [this.inverseMap[j], this.inverseMap[i]]
  }

  less(i, j) {
    return this.compare(this.values[this.inverseMap[i]], this.values[this.inverseMap[j]]) <= 0;
  }

  update(ki, value) {
    let index = this.positionMap[ki];
    this.values[ki] = value;
    this.sink(i);
    this.swim(i);
  }

  decreaseKey(ki, value) {
    if (this.compare(value, this.values[ki]) < 0) {
      this.values[ki] = value;
      this.swim(this.positionMap[ki]);
    }
  }

  increaseKey(ki, value) {
    if (this.compare(this.values[ki], value) < 0) {
      this.values[ki] = value;
      this.sink(this.positionMap[ki]);
    }
  }
}


let testEls = new Map;
testEls.set('Anna', 43);
testEls.set('Bella', 25);
testEls.set('Carly', 73);
testEls.set('Dylan', 11);
testEls.set('Emily', 98);
testEls.set('Fred', 37);
testEls.set('George', 62);
testEls.set('Henry', 1);
testEls.set('Isaac', 88);
testEls.set('James', 59);



let testHeap = new IndexedPriorityQueue(testEls);
while (testHeap.size) {
  const ki = testHeap.peekMinKeyIndex();
  console.log(`${testHeap.keyIndexToLabel[ki]} is ${testHeap.pollMinValue()}`);  // should log els out in order from smallest to largest
}

testHeap = new IndexedPriorityQueue(testEls, (a, b) => (b - a));
while (testHeap.size) {
  const ki = testHeap.peekMinKeyIndex();
  console.log(`${testHeap.keyIndexToLabel[ki]} is ${testHeap.pollMinValue()}`);  // should log els out in order from largest to smallest
}

testHeap = new IndexedPriorityQueue(testEls)
testHeap.decreaseKey(testHeap.labelToKeyIndex.get('George'), 2); // should go through
testHeap.decreaseKey(testHeap.labelToKeyIndex.get('Fred'), 57); // should have no effect
while (testHeap.size) {
  const ki = testHeap.peekMinKeyIndex();
  console.log(`${testHeap.keyIndexToLabel[ki]} is ${testHeap.pollMinValue()}`);  // should log els out in order from smallest to largest
}

testHeap = new IndexedPriorityQueue(testEls)
testHeap.increaseKey(testHeap.labelToKeyIndex.get('George'), 2); // should have no effect
testHeap.increaseKey(testHeap.labelToKeyIndex.get('Fred'), 57); // should go through
while (testHeap.size) {
  const ki = testHeap.peekMinKeyIndex();
  console.log(`${testHeap.keyIndexToLabel[ki]} is ${testHeap.pollMinValue()}`);  // should log els out in order from smallest to largest
}