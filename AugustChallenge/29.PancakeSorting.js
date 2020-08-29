var pancakeSort = function(A) {
  let results = [];

  function largestBefore(end) {
    let index = 0;
    let val = A[0];

    for (let i = 1; i <= end; i++) {
      current = A[i];
      if (current > val) {
        index = i;
        val = current;
      }
    }

    return index;
  }

  function flip(index) {
    results.push(index + 1);
    let bot = 0;
    while (bot < index - bot) {
      [A[bot], A[index - bot]] = [A[index - bot], A[bot]];
      bot++;
    }
  }

  for (let i = A.length - 1; i > 0; i--) {
    const j = largestBefore(i)
    if (j === 0) {
      flip(i);
    } else if (j < i) {
      flip(j);
      flip(i);
    }
  }

  //console.log('A: ', A)
  return results;
};

let test = [];
console.log(pancakeSort(test));

test = [3,2,4,1];
console.log(pancakeSort(test));

test = [1,2,3];
console.log(pancakeSort(test));