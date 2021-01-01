var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const result = [];

  const queue = [root];
  let ltr = true;

  while (queue.length) {
    const width = queue.length;
    const level = [];

    for (let i = 0; i < width; i++) {
      const { val, left, right } = queue.shift();

      if (ltr) {
        level.push(val);
      } else {
        level.unshift(val);
      }

      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    result.push(level);
    ltr = !ltr;
  }

  return result;
};
