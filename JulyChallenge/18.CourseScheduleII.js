var findOrder = function(numCourses, prerequisites) {
  const visited = Array(numCourses).fill(0);
  const order = [];
  let cyclic = false;

  const adjacency = visited.map(() => []);
  for (const edge of prerequisites) {
    [course, prereq] = edge;
    adjacency[course].push(prereq);
  }

  const dfs = (node) => {
    if (cyclic || visited[node]) return;

    visited[node] = 1;

    const prereqs = adjacency[node];
    for (let i = 0; i < prereqs.length; i++) {
      const next = prereqs[i];
      if (visited[next] === 1) {
        cyclic = true;
        return;
      }
      dfs(next)
    }

    visited[node] = 2;
    order.push(node);
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i)
  }

  return cyclic ? [] : order;
};
