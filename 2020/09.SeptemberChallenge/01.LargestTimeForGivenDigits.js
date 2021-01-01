var largestTimeFromDigits = function(A) {
  function greatestMemberUpTo(n, arr) {
    let digit = -1;
    const remainder = [];

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num > digit && num <= n) {
        if (digit !== -1) {
          remainder.push(digit);
        }
        digit = num;
      } else {
        remainder.push(num);
      }
    }
    return {digit, remainder}
  }

  let firstGoal = 2

  while (firstGoal > 0) {
    let result = "";

    var {digit, remainder} = greatestMemberUpTo(firstGoal, A);
    if (digit === -1) {
      firstGoal--;
      continue;
    }
    result += digit;

    if (digit === 2) {
      var {digit, remainder} = greatestMemberUpTo(3, remainder);
    } else {
      var {digit, remainder} = greatestMemberUpTo(9, remainder);
    }
    if (digit === -1) {
      firstGoal--;
      continue;
    }
    result += digit + ':';

    var {digit, remainder} = greatestMemberUpTo(5, remainder);
    if (digit === -1) {
      firstGoal--;
      continue;
    }
    result += digit;
    result += remainder[0];
    return result;
  }

  return "";
};



console.log(largestTimeFromDigits([1,2,3,4])) // "23:41"
console.log(largestTimeFromDigits([5,5,5,5])) // ""
console.log(largestTimeFromDigits([0,0,3,1])) // "13:00"
console.log(largestTimeFromDigits([2,0,6,6])) // "06:26"
