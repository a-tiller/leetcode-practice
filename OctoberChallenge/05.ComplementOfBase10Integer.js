var bitwiseComplement = function(N) {
  let maxSet = 0;
  let result = 0;

  for (let i = 0; i < 32; i++) {
    if ((1 << i) & N) maxSet = i;
  }

  for (let i = 0; i <= maxSet; i++) {
    if (!((1 << i) & N)) result += 1 << i;
  }

  return result;
};
console.log(bitwiseComplement(5))
console.log(bitwiseComplement(7))
console.log(bitwiseComplement(10))
