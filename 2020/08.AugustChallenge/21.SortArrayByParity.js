var sortArrayByParity = function(A) {
  let left = 0;
  let right = A.length - 1;
  const B = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    const val = A[i]
    if (val % 2) {
      B[right] = val;
      right--;
    } else {
      B[left] = val;
      left++;
    }
  }

  return B;
};

let test = []
console.log(sortArrayByParity(test));

test = [3,1,2,4];
console.log(sortArrayByParity(test));