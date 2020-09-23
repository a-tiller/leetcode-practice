var canCompleteCircuit = function(gas, cost) {

  let minSeen = Infinity;
  let minDex = -1;

  let current = 0;

  for (let i = 0; i < gas.length; i++) {
    current += gas[i]
    current -= cost[i]
    if (current < minSeen) {
      minSeen = current;
      minDex = i;
    }
  }


  return current >=0 ? (minDex + 1) % gas.length : -1;
};

let testGas  = [1,2,3,4,5];
let testCost = [3,4,5,1,2];
console.log(canCompleteCircuit(testGas, testCost)) // 3

testGas  = [2,3,4];
testCost = [3,4,3];
console.log(canCompleteCircuit(testGas, testCost)) // -1