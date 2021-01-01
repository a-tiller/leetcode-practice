var bitwiseComplement = function(N) {
  return N ? (Math.pow(2, Math.ceil(Math.log2(N))) - 1) & ~N : 1;
};

console.log(bitwiseComplement(5)) // 2
console.log(bitwiseComplement(7)) // 0
console.log(bitwiseComplement(10)) // 5
console.log(bitwiseComplement(0)) // 1

