var sortArrayByParity = function(A) {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    if (A[left] % 2) {
      [A[left], A[right]] = [A[right], A[left]];
      right--;
    } else {
      left++;
    }
  }

  return A;
};

let test = []
console.log(sortArrayByParity(test));

test = [3,1,2,4];
console.log(sortArrayByParity(test));