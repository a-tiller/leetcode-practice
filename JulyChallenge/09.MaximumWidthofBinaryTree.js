var widthOfBinaryTree = function(root) {
  const rows = [[root]];
  let keepGoing = true;
  let width = 0;

  const trimRow = function(row) {
    while (row[0] === null) {
      row.shift();
    }

    while (row[row.length - 1] === null) {
      row.pop();
    }
  };

  while (keepGoing) {
    keepGoing = false;

    const oldRow = rows[rows.length - 1];
    const newRow = [];
    let speculativeCount = 0;
    let committedCount = 0;

    for (let i = 0; i < oldRow.length; i++) {
      const value = oldRow[i];
      if (value === null) {
        speculativeCount++;
        newRow.push(null);
        newRow.push(null)
      } else {
        keepGoing = true;
        speculativeCount++;
        committedCount = speculativeCount;
        newRow.push(value.left);
        newRow.push(value.right);
      }
    }

    rows.pop(); // remove previous rows to prevent out of memory errors
    trimRow(newRow); // remove leading and trailing nulls to prevent out of memory errors
    rows.push(newRow);

    if (committedCount > width) {
      width = committedCount;
    }
  }

  return width;
};

