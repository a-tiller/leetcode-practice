var pathSum = function(root, sum) {
  if (!root)  return 0;

  counter = 0;

  const dfs = function(node, prevsums = []) {
    if (!node) return;

    let newSums = [...prevsums];
    newSums.push(0);
    newSums = newSums.map(oldSum => {
      const newSum = oldSum + node.val;
      if (newSum === sum) {
        counter++;
      }
      return newSum;
    });

    dfs(node.left, newSums);
    dfs(node.right, newSums);
  }

  dfs(root);

  return counter;
};

