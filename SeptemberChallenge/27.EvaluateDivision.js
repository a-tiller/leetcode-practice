var calcEquation = function(equations, values, queries) {
  const adjacency = new Map();
  const weights = new Map();

  for (let i = 0; i < equations.length; i++) {
      const [start, end] = equations[i];

      if (!adjacency.has(start)) adjacency.set(start, new Set());
      adjacency.get(start).add(end);
      weights.set(`${start}-${end}`, values[i]);

      if (!adjacency.has(end)) adjacency.set(end, new Set());
      adjacency.get(end).add(start);
      weights.set(`${end}-${start}`, 1 / values[i]);
  }

  function addChildren (root, current, rootToCurrent) {
      weights.set(`${root}-${current}`, rootToCurrent);
      weights.set(`${current}-${root}`, 1 / rootToCurrent);

      adjacency.get(current).forEach(child => {
          if (!weights.has(`${root}-${child}`)) {
              addChildren(root, child, rootToCurrent * weights.get(`${current}-${child}`));
          }
      });
  }

  adjacency.forEach((neighbors, node) => {
      neighbors.forEach(neighbor => {
         adjacency.get(neighbor).forEach(grandchild => {
             addChildren(node, grandchild, weights.get(`${node}-${neighbor}`) * weights.get(`${neighbor}-${grandchild}`));
         });
      });
  });

  const results = [];

  for (let i = 0; i < queries.length; i++) {
      const[s, e] = queries[i];
      results[i] = weights.has(`${s}-${e}`) ? weights.get(`${s}-${e}`) : -1;
  }

  return results;
};