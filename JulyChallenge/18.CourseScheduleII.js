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

    if (visiting.has(node)) {
      return false
    }

    const p = adjacency[node];
    visiting.add(node);

    for (let i = 0; i < p.length; i++) {
      if (!dfs(p[i], visiting)) {
        return false;
      }
    }

    visiting.delete(node);
    visited.add(node);
    order.push(node);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return []
    }
  }

  return order;
};
