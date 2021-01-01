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