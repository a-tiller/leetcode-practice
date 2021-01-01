var criticalConnections = function(n, connections) {

  const adjacencies = new Array(n).fill(0).map(()=>(new Set()));
  const order = new Array(n).fill(-1);
  const low = new Array(n).fill(Infinity);
  const results = [];
  let counter = 0;

  connections.forEach(([a, b]) => {
    adjacencies[a].add(b);
    adjacencies[b].add(a);
  });

  const dfs = (prev, node) => {
    order[node] = counter++;
    low[node] = order[node]
    adjacencies[node].forEach((neighbor) => {
      if (order[neighbor] === -1) {
        dfs(node, neighbor);
        low[node] = Math.min(low[node], low[neighbor]);
        if (low[neighbor] === order[neighbor]) {
          results.push([node, neighbor]);
        }
      } else if (neighbor !== prev) {
         low[node] = Math.min(low[node], low[neighbor]);
      }
    })
  }

  //  If graph might be partitioned
  //
  // for (let i = 0; i < n; i++) {
  //   if (order[i] === -1) {
  //     dfs(i, i);
  //   }
  // }

  dfs(0, 0)

  return results;
};

let num = 8;
let con = [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [4, 5], [5, 6], [6, 4], [2, 7], [7, 1]];
console.log(criticalConnections(num, con)); //  [ [2, 4] ]