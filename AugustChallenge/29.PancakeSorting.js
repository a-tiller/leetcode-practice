var pancakeSort = function(A) {
  let results = [];

  function locate(index) {
    const val = A[index]
    let bot = 0;
    let top = index - 1;
    let candidate = 0;

    while (bot <= top) {
      let mid = Math.floor((bot + top) / 2);
      if (A[mid] < val) {
        candidate = mid + 1;
        bot = mid + 1;
      } else {
        top = mid - 1;
      }
    }

    return candidate;
  }

  function flip(index) {
    if (index === 0) return;
    results.push(index + 1);
    let bot = 0;
    while (bot < index - bot) {
      [A[bot], A[index - bot]] = [A[index - bot], A[bot]];
      bot++;
    }
  }

  for (let i = 1; i < A.length; i++) {
    const j = locate(i)
    if (j === 0) {
      flip(i - 1);
      flip(i);
    } else if (j < i) {
      flip(i);
      flip(i - j);
      flip(i - j - 1);
      flip(i);
    }
  }

  return results;
};

let test = [];
console.log(pancakeSort(test));

test = [3,2,4,1];
console.log(pancakeSort(test));

test = [1,2,3];
console.log(pancakeSort(test));