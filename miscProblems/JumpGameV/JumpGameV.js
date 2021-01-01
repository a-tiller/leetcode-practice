var maxJumps = function(arr, d) {
  const ValuesToIndices = new Map();
  const IndextoMoves = new Map();

  arr.forEach((v, i) => {
    // make a map of values to indices
    if (ValuesToIndices.has(v)) {
      ValuesToIndices.set(v, ValuesToIndices.get(v).concat([i]));
    } else {
      ValuesToIndices.set(v, [i])
    }

    // make a map of indices to legal moves
    // check down
    let counter = 1;
    while (counter <= d) {
      const current = i - counter;
      if (current < 0) {
        break;
      }
      if (arr[current] < arr[i]) {
        if (IndextoMoves.has(i)) {
          IndextoMoves.set(i, IndextoMoves.get(i).concat([current]));
        } else {
          IndextoMoves.set(i, [current]);
        }
      } else {
        break;
      }
      counter++;
    }
    //check up
    counter = 1;
    while (counter <= d) {
      const current = i + counter;
      if (current === arr.length) {
        break;
      }
      if (arr[current] < arr[i]) {
        if (IndextoMoves.has(i)) {
          IndextoMoves.set(i, IndextoMoves.get(i).concat([current]));
        } else {
          IndextoMoves.set(i, [current]);
        }
      } else {
        break;
      }
      counter++;
    }
  })

  // array to record found jump values
  const maxJumps = new Array(arr.length).fill(0);

  // make sorted array of values
  const valuesArray = [...ValuesToIndices.keys()].sort((a, b) => (a - b));

  valuesArray.forEach((v) => {
    const indices = ValuesToIndices.get(v);
    indices.forEach((index) => {
      if (IndextoMoves.has(index)) {
        const moves = IndextoMoves.get(index);
        moves.forEach((move) => {
          maxJumps[index] = Math.max(maxJumps[index], maxJumps[move] + 1);
        });
      }
    });
  });

  // return max moves from array plus one for the starting point
  return Math.max(...maxJumps) + 1;
};

// let arr = [6,4,14,6,8,13,9,7,10,6,12];
// let d = 2;

// arr = [3,3,3,3,3];
// d = 3;

// arr = [7,6,5,4,3,2,1];
// d = 1;

// arr = [7,1,7,1,7,1];
// d = 2;

// arr = [66];
// d = 1;

// console.log(maxJumps(arr, d));