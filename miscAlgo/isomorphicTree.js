/*
  Input: two undirected graphs in the form of adjacency lists
  Output: boolean
  Process: For each graph, find the center(s), produce rooted tree(s), convert to canonical string representation, compare.
*/

function isIsomorphic(tree1, tree2) {

  class TreeNode {
    constructor(id, parent = null) {
      this.id = id;
      this.parent = parent;
      this.children = [];
    }

    addChild(node) {
      this.children.push(node);
    }
  }


  const center = (tree) => {
    const centers = [];

    const n = tree.length;
    const degree = new Array(n);
    let leaves = [];

    for (let i = 0; i < n; i++) {
      const edges = tree[i];
      degree[i] = edges.length;
      if (degree[i] <= 1){
        leaves.push(i)
        degree[i] = 0;
      }
    }

    let processed = leaves.length;

    while (processed < n) {
      const newLeaves = [];
      for (const node of leaves) {
        for (const neighbor of tree[node]) {
          if (--degree[neighbor] === 1) {
            newLeaves.push(neighbor);
          }
        }
        degree[node] = 0;
      }
      processed += newLeaves.length;
      leaves = newLeaves;
    }

    return leaves;
  }

  const rootTree = (tree, center) => {
    const root = new TreeNode(center);

    const buildTree = (graph, node) => {
      for (const neighbor of graph[node.id]) {
        if (node.parent && neighbor === node.parent.id) {
          continue;
        }

        const child = new TreeNode(neighbor, node);
        node.addChild(child);

        buildTree(graph, child);
      }

      return node;
    }

    return buildTree(tree, root);
  }

  const serializeTree = (tree) => {
    if (tree === null) {
      return "";
    }

    let labels = [];

    for (const child of tree.children) {
      labels.push(serializeTree(child));
    }

    labels.sort();

    return '(' + labels.join('') + ')'
  }

  if (tree1.length === 0 || tree2.length === 0) {
    return false;
  }

  const centers1 = center(tree1);
  const centers2 = center(tree2);

  const rooted1 = rootTree(tree1, centers1[0]);
  const encoded1 = serializeTree(rooted1);

  for (const center of centers2) {
    const rooted2 = rootTree(tree2, center);
    const encoded2 = serializeTree(rooted2)

    if (encoded1 === encoded2) {
      return true
    }
  }

  return false;
}

let alist1 = [[2], [2], [0, 1, 3], [2, 4], [3]];
let alist2 = [[1], [0, 2, 3], [1, 4], [1], [2]];

console.log(isIsomorphic(alist1, alist2));