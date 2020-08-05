var findOrder = function(numCourses, prerequisites) {
  const visited = new Set();
  const order = [];

  const adjacency = new Array(numCourses).fill(0).map(() => []);
  for (const edge of prerequisites) {
    [course, prereq] = edge;
    adjacency[course].push(prereq);
  }

  const dfs = (node, visiting = new Set()) => {
    if (visited.has(node)) {
      return true;
    }

    let noCycle = true;

    visiting.add(node);
    adjacency[node].forEach(p => {
      if (visiting.has(p)) {
        noCycle = false;
        return;
      }
      if (!dfs(p, visiting)) {
        noCycle = false;
      }
    });
    visited.add(node);
    visiting.delete(node);
    order.push(node);

    return noCycle;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return []
    }
  }

  return order.length === numCourses ? order : [];
};
