var findMinHeightTrees = function(n, edges) {
  const adjacencies = new Array(n).fill(0).map(()=>([]));

  edges.forEach(([a, b]) => {
    adjacencies[a].push(b);
    adjacencies[b].push(a);
  });

  const degrees = new Array(n).fill(0).map((_, i) => (adjacencies[i].length));

  let leaves = [];

  degrees.forEach((degree, node) => {
    if (degree <= 1) {
      leaves.push(node);
    }
  });

  let count = leaves.length;

  while (count < n) {
    const newLeaves = [];

    leaves.forEach((leaf) => {
      const neighbors = adjacencies[leaf];

      neighbors.forEach((neighbor) => {
        degrees[neighbor]--;
        if (degrees[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      });
    });

    count += newLeaves.length;
    leaves = newLeaves;
  }

  return leaves;
};

let n = 6
let edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
console.log(findMinHeightTrees(n, edges)) //