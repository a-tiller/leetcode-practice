var hIndex = function(citations) {
  let working = [...citations];

  working.sort((a, b) => (a - b));

  for (let i = 0; i < working.length; i++) {
    const h = working.length - i;
    if (working[i] >= h) {
      return h;
    }
  }

  return 0;
};

let cites = [];
console.log(hIndex(cites)); // 0

cites = [3,0,6,1,5];
console.log(hIndex(cites)); // 3

cites = [3,0,6,1,5,2,5,8,9,12,64,23,7];
console.log(hIndex(cites)); // 6

cites = [1];
console.log(hIndex(cites)); // 1