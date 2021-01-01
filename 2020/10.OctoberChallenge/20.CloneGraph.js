var cloneGraph = function(node) {
  if (!node) return node

  const newGraphReference = new Node(node.val);
  const seen = new Set([node.val]);
  const queue = [node];
  const valToNode = {};
  valToNode[node.val] = newGraphReference;

  while (queue.length) {
    const oldNode = queue.shift();
    const newNode = valToNode[oldNode.val] || new Node(oldNode.val);

    oldNode.neighbors.forEach(neighbor => {
      if (valToNode.hasOwnProperty(neighbor.val)) {
        newNode.neighbors.push(valToNode[neighbor.val]);
      } else {
        const newNeighbor = new Node(neighbor.val);

        newNode.neighbors.push(newNeighbor);
        valToNode[neighbor.val] = newNeighbor;
      }

      if (!seen.has(neighbor.val)) {
        queue.push(neighbor);
        seen.add(neighbor.val);
      }
    });
  }

  return newGraphReference;
};