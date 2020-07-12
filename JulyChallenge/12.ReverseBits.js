var reverseBits = function(n) {
  let binaryString = n.toString(2);
  let shifts = 32 - binaryString.length;

  let unShifted = parseInt(binaryString.split('').reverse().join(''), 2);

  return (unShifted << shifts) >>> 0;
};