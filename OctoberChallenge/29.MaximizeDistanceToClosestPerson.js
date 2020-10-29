var maxDistToClosest = function(seats) {
  let counter = 0;
  let i = 0;

  for ( ; !seats[i]; i++) counter++
  let result = counter;

  for ( ; i < seats.length; i++, counter++) {
    if (seats[i]) {
      result = Math.max(result, Math.floor((counter + 1) / 2));
      counter = -1;
    }
  }

  return Math.max(result, counter);
};

let test = [1,0,0,0,1,0,1];
console.log(maxDistToClosest(test)) // 2

test = [1,0,0,0];
console.log(maxDistToClosest(test)) // 3

test = [0,1];
console.log(maxDistToClosest(test)) // 1

test = [1,0,1];
console.log(maxDistToClosest(test)) // 1