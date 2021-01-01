var allPathsSourceTarget = function(graph) {
  const target = graph.length - 1;
  const results = [];

  const dfs = function(graph, target, pos = 0, path = [0]) {
    const adjacency = graph[pos];

    for (let i = 0; i < adjacency.length; i++) {
      const next = adjacency[i];

      path.push(next);
      if (next === target) {
        results.push([...path]);
      } else {
        dfs(graph, target, next, path);
      }
      path.pop();
    }
  }

  dfs(graph, target);

  return results;
};
