var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let ltr = true;

  let ltrQueue = [root];
  let rtlQueue = [];

  const result = [];
  let level = [];
  let current = null;

  while (ltrQueue.length > 0 || rtlQueue.length > 0) {
    if (ltr) {
      current = ltrQueue.pop()
      level.push(current.val)
      if (current.left !== null) {
        rtlQueue.push(current.left)
      }
      if (current.right !== null) {
        rtlQueue.push(current.right)
      }
      if (ltrQueue.length === 0) {
        result.push(level);
        level = [];
        ltr = false;
      }
    } else {
      current = rtlQueue.pop()
      level.push(current.val)
      if (current.right !== null) {
        ltrQueue.push(current.right)
      }
      if (current.left !== null) {
        ltrQueue.push(current.left)
      }
      if (rtlQueue.length === 0) {
        result.push(level);
        level = [];
        ltr = true;
      }
    }
  }

  return result;
};
