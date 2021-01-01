var recoverTree = function(root) {

  function makeInorder(node, arr) {
    if (node.left) makeInorder(node.left, arr);
    arr.push(node);
    if (node.right) makeInorder(node.right, arr);
  }

  const inOrder = [];
  makeInorder(root, inOrder);

  let first = null;
  let second = null;
  for (let i = 0; i < inOrder.length - 1; i++) {
    if (inOrder[i].val > inOrder[i + 1].val) {
      second = inOrder[i + 1];
      if (!first) {
        first = inOrder[i];
      } else {
        break
      }
    }
  }

  [first.val, second.val] = [second.val, first.val];
};