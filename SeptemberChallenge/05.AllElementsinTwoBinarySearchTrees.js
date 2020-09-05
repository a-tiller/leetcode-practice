var getAllElements = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  const results = [];

  function inOrder(node, arr) {
    if (!node) return;
    inOrder(node.left, arr);
    arr.push(node.val);
    inOrder(node.right, arr);
  }

  inOrder(root1, arr1);
  inOrder(root2, arr2);

  while (arr1.length || arr2.length) {
    if (!arr1.length) {
      results.push(...arr2);
      break;
    }

    if (!arr2.length) {
      results.push(...arr1);
      break;
    }

    if (arr1[0] > arr2[0]) {
      results.push(arr2.shift());
    } else {
      results.push(arr1.shift());
    }
  }

  return results;
};
