var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const result = [];

  let nodes = [root];
  let ltr = true;

  while (nodes.length) {
    const levelWidth = nodes.length;
    const children = [];
    const level = [];

    for (let i = 0; i < levelWidth; i++) {
      const current = nodes.pop();
      level.push(current.val);
      if (ltr) {
        if (current.left) children.push(current.left);
        if (current.right) children.push(current.right);
      } else {
        if (current.right) children.push(current.right);
        if (current.left) children.push(current.left);
      }
    }

    result.push(level);
    ltr = !ltr;
    nodes = children;
  }

  return result;
};
