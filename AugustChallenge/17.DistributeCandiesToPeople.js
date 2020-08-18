var distributeCandies = function(candies, num_people) {
  const result = new Array(num_people).fill(0);

  const sumTo = function(n) {
    return ((n + 1) * Math.floor(n / 2)) + ((n % 2) * Math.ceil(n / 2));
  }

  let rowCount = 0;

  while(true) {
    const nextRow = sumTo(num_people) + Math.pow(num_people, 2) * rowCount;
    if (nextRow > candies) {
      break;
    } else {
      rowCount++;
      candies -= nextRow;
    }
  }

  for (let i = 1; i <= result.length; i++) {
    result[i - 1] = (sumTo(rowCount - 1) * num_people) + (rowCount * i);
  }

  let start = rowCount * num_people;

  for (let i = 0; candies > 0; i++) {
    start++;
    if (start < candies) {
      result[i] += start;
      candies -= start;
    } else {
      result[i] += candies;
      candies = 0;
    }
  }

  return result;
};

console.log(distributeCandies(7, 4)); // [1, 2, 3, 1]
console.log(distributeCandies(10, 3)); // [5, 2, 3]

