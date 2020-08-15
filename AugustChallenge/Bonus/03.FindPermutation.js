var findPermutation = function(s) {
  const result = new Array(s.length + 1);
  const stack = [];
  let current = 1;

  for (let i = 0; i < s.length; i++) {
    stack.push(i)
    if (s[i] === 'I') {
      while (stack.length) {
        index = stack.pop();
        result[index] = current;
        current++;
      }
    }
  }

  stack.push(s.length);
  while (stack.length) {
    index = stack.pop();
    result[index] = current;
    current++;
  }

  return result;
}

let test = "I"
console.log(findPermutation(test)); // [1,2]

test = "DI"
console.log(findPermutation(test)); // [2,1,3]

test = "DDIIDI"
console.log(findPermutation(test)); // [3,2,1,4,6,5,7]