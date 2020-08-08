var pathSum = function(root, sum) {
  if (!root)  return 0;

  counter = 0;
  sumHash = {}

  const dfs = function(node, current = 0) {
    if (!node) return;

    current += node.val;

    current === sum && counter++;
    counter += ~~sumHash[current - sum];

    sumHash.hasOwnProperty(current) ? sumHash[current] += 1 : sumHash[current] = 1;
    dfs(node.left, current);
    dfs(node.right, current);
    sumHash[current] -= 1;
  }

  dfs(root);

  return counter;
};
