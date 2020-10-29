var maxDistToClosest = function(seats) {
  let result = 0;
  let outermost = !seats[0];
  let counter = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i]) {
      if (outermost) {
        result = counter;
        outermost = false;
      } else {
        result = Math.max(result, Math.floor(counter / 2) + (counter % 2));
      }
      counter = 0;
    } else {
      counter++
    }
  }

  if (!seats[seats.length - 1]) result = Math.max(result, counter);

  return result;
};

let test = [1,0,0,0,1,0,1];
console.log(maxDistToClosest(test)) // 2

test = [1,0,0,0];
console.log(maxDistToClosest(test)) // 3

test = [0,1];
console.log(maxDistToClosest(test)) // 1

test = [1,0,1];
console.log(maxDistToClosest(test)) // 1