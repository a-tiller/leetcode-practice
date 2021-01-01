/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const store = {
    max: 0,
    min: 0,
  };

  const dfs = (node, x = 0, y = 0) => {
    if (!node) return;

    if (store[x]) {
      if (!store[x][y]) {
        store[x][y] = [node.val]
      } else {
        store[x][y].push(node.val)
      }

      store[x].max = Math.max(store[x].max, y);
      store[x].min = Math.min(store[x].min, y);
    } else {
      store[x] = {
        max: y,
        min: y
      };
      store[x][y] = [node.val];
    }

    store.max = Math.max(store.max, x);
    store.min = Math.min(store.min, x);

    dfs(node.left, x - 1, y - 1);
    dfs(node.right, x + 1, y - 1);
  };

  const makeVertical = (obj) => {
    const v = [];
    for (let i = obj.min; i <= obj.max; i++) {
      if (!obj[i]) {
        continue;
      }
      const xReport = [];
      for (let j = obj[i].min; j <= obj[i].max; j++) {
        if (!obj[i][j]) {
          continue
        }
        const bucket = obj[i][j];
        bucket.sort((a, b) => (a - b));
        xReport.unshift(...bucket);
      }
      v.push(xReport)
    }
    return v;
  };

  dfs(root);
  return makeVertical(store);
};

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

// function makeTree(arr, pos = 0) { /// ???????????????????????????? This is breaking somehow
//   if (arr[pos] || arr[pos] === 0) {
//     let node = new TreeNode(arr[pos]);
//     node.left = makeTree(arr, (2 * pos) + 1)
//     node.right = makeTree(arr, (2 * pos) + 2)
//     return node;
//   }
//   return null;
// }

// let serial, root;

// serial = [3,9,20,null,null,15,7];
// root = makeTree(serial)
// console.log(verticalTraversal(root)); //  [[9],[3,15],[20],[7]]

// serial = [1,2,3,4,5,6,7];
// root = makeTree(serial)
// console.log(verticalTraversal(root)); //  [[4],[2],[1,5,6],[3],[7]]

// serial = [0,10,1,null,null,2,4,3,5,null,null,6,null,7,9,8,null,null,null,null,11,null,null,12];
// root = makeTree(serial)  // this tree is getting built wrong
// console.log(verticalTraversal(root)); //  [[8],[6],[10,3],[0,2,7],[1,5],[4,9,12],[11]]
