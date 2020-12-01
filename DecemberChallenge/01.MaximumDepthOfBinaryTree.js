var maxDepth = function(root) {
  let maxDepth = 0;

  const dfs = (node, depth = 1) => {
    if (!node) return;

    maxDepth = Math.max(depth, maxDepth);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root);

  return maxDepth;
};