var widthOfBinaryTree = function(root) {
  let maxWidth = 0;

  if (!root) {
    return maxWidth;
  }

  let queue = [{node: root, pos: 1}];

  while (queue.length > 0) {
    const oldLength = queue.length;
    const maxPos = queue[oldLength - 1].pos;
    const minPos  = queue[0].pos;

    const rowWidth =  maxPos - minPos + 1;
    maxWidth = Math.max(maxWidth, rowWidth);

    queue.map((queued) => {
      queued.pos = queued.pos - minPos + 1;
      return queued;
    });

    for (let i = 0; i < oldLength; i++) {
      const { node, pos } = queue.shift();

      if (node.left !== null) {
        queue.push({
          node: node.left,
          pos: pos * 2 - 1
        });
      }

      if (node.right !== null) {
        queue.push({
          node: node.right,
          pos: pos * 2
        });
      }
    }
  }

  return maxWidth;
};
