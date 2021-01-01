var hammingDistance = function(x, y) {
  let distance = 0;

  const xArray = [];
  const yArray = [];

  const toBinaryArray = (num, array) => {
    for (let i = 31; i >= 0; i--) {
      let digit = Math.pow(2, i);

      if (num - digit >= 0) {
        array.push(1);
        num -= digit;
      } else {
        array.push(0)
      }
    }
  }

  toBinaryArray(x, xArray);
  toBinaryArray(y, yArray);

  for (let j = 0; j < xArray.length; j++) {
    if (xArray[j] !== yArray[j]) {
      distance++;
    }
  }

  return distance;
};
