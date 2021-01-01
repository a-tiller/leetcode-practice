class UnionFind {
  constructor(size) {
    this.id = new Array(size).fill(0).map((v, i) => (i));
    this.size = new Array(size).fill(1);
    this.components = size;
  }

  find(node) {
    let root = node;
    while (this.id[root] !== root) {
      root = this.id[root];
    }
    while (node != root) {
      [node, this.id[node]] = [this.id[node], root]
    }
    return root;
  }

  union(left, right) {
    const leftRoot = this.find(left);
    const rightRoot = this.find(right);

    if (leftRoot === rightRoot) return;

    if (this.size[leftRoot] > this.size[rightRoot]) {
      this.id[rightRoot] = leftRoot;
      this.size[leftRoot] += this.size[rightRoot];
    } else {
      this.id[leftRoot] = rightRoot;
      this.size[rightRoot] +=  this.size[leftRoot];
    }
    this.components--;
  }

  componentSize(node) {
    return this.size[this.find(node)];
  }

  connected(left, right) {
    return this.find(left) === this.find(right);
  }
}

var largestComponentSize = function(A) {
  if(!A.length) return 0;

  function getPrimeList(max) {
    const sieve = new Array(max + 1).fill(0);
    const results = [];

    for (let i = 2; i <= max; i++) {
      if (sieve[i] === 0) {
        let multiples = i;
        results.push(i);
        while ( multiples <= max) {
          sieve[multiples += i] = 1;
        }
      }
    }

    return results;
  }

  const primeList = getPrimeList(Math.floor(Math.max(...A) / 2));
  const primeMap = {};
  primeList.forEach((v, i) => (primeMap[v] = i));

  const primeFactors = new Array(A.length).fill(0);

  for (let i = 0; i < A.length; i++) {
    const val = A[i];
    const factors = [];

    for (let j = 0; j < primeList.length; j++) {
      const prime = primeList[j];
      if (prime > val) break;
      if (val % prime === 0) factors.push(prime);
    }

    primeFactors[i] = factors;
  }

  const componentGraph = new UnionFind(primeList.length);

  for (let i = 0; i < A.length; i++) {
    const factors = primeFactors[i];

    for (let j = 0; j < factors.length - 1; j++) {
      for (let k = 1; k < factors.length; k++) {
        componentGraph.union(primeMap[factors[j]], primeMap[factors[k]])
      }
    }
  }

  const counts = {}

  for (let i = 0; i < A.length; i++) {
    const group = componentGraph.find(primeMap[primeFactors[i][0]]);
    if (group === undefined) continue;
    if (!counts.hasOwnProperty(group)) counts[group] = 0;

    counts[group]++;
  }

  return Math.max(...Object.values(counts));
};


console.log(largestComponentSize([4,6,15,35])); // 4
console.log(largestComponentSize([20,50,9,63])); // 2
console.log(largestComponentSize([2,3,6,7,4,12,21,39])); // 8
console.log(largestComponentSize([897,330,996,485,705,284,794,171,269,206,209,244,725,124,617,420,346,796,957])); // 17
console.log(largestComponentSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14])); // 11
console.log(largestComponentSize([99,68,70,77,35,52,53,25,62])); // 8
console.log(largestComponentSize([65,27,100,37,12,19,4,58,91,5])); // 8




// console.log(largestComponentSize([100000]));