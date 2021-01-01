var combinationSum = function(candidates, target) {
  const results = [];

  while (candidates.length) {
    const current = candidates.pop();
    const working = [current];
    let remaining = target - current;

    while (remaining >= 0) {
      if (remaining === 0) {
        results.push(working);
        break;
      }

      const further = combinationSum([...candidates], remaining);
      further.forEach(array => {
        results.push(working.concat(array));
      });

      remaining -= current;
      working.push(current);
    }
  }

  return results;
};

let testC = [];
let testT = 0;
console.log(combinationSum(testC, testT)) // []

testC = [2,3,6,7];
testT = 7;
console.log(combinationSum(testC, testT)) // [[2,2,3],[7]]

testC = [2,3,5];
testT = 8;
console.log(combinationSum(testC, testT)) // [[2,2,2,2],[2,3,3],[3,5]]

testC = [2];
testT = 1;
console.log(combinationSum(testC, testT)) // []

testC = [1];
testT = 1;
console.log(combinationSum(testC, testT)) // [[1]]

testC = [1];
testT = 2;
console.log(combinationSum(testC, testT)) // [[1,1]]


