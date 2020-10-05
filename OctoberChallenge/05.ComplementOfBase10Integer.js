var bitwiseComplement = function(N) {
  let pending = 0;
  let result = 0;

  for (let i = 0; i < 32; i++) {
    if ((1 << i) & N) {
      result += pending;
      pending = 0;
    } else {
      pending += 1 << i;
    }
  }

  return N ? result : 1;
};

console.log(bitwiseComplement(5)) // 2
console.log(bitwiseComplement(7)) // 0
console.log(bitwiseComplement(10)) // 5
console.log(bitwiseComplement(0)) // 1

