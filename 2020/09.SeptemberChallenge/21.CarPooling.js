var carPooling = function(trips, capacity) {
  let lastStop = 0;
  trips.forEach(trip => {
    lastStop = Math.max(lastStop, trip[2]);
  })

  const totalRiders = new Array(lastStop + 1).fill(0);

  for (let i = 0; i < trips.length; i++) {
    const [passengers, start, end] = trips[i];
    for (let j = start; j < end; j++) {
      totalRiders[j] += passengers;
      if (totalRiders[j] > capacity) return false;
    }
  }

  return true;
};

let trips = [];
let capacity = 0;
console.log(carPooling(trips, capacity)) // true

trips = [[2,1,5],[3,3,7]];
capacity = 4;
console.log(carPooling(trips, capacity)) // false

trips = [[2,1,5],[3,3,7]];
capacity = 5;
console.log(carPooling(trips, capacity)) // true

trips = [[2,1,5],[3,5,7]];
capacity = 3;
console.log(carPooling(trips, capacity)) // true

trips = [[3,2,7],[3,7,9],[8,3,9]];
capacity = 11;
console.log(carPooling(trips, capacity)) // true

