var addBinary = function(a, b) {
  let aPos = a.length - 1;
  let aVal = 0;
  let bPos = b.length - 1;
  let bVal = 0;
  let carry = 0;
  let result = [];

  while (aPos >= 0 || bPos >= 0 || carry > 0) {
    if (aPos >= 0) {
      aVal = +a[aPos];
      aPos--;
    } else {
      aVal = 0;
    }

    if (bPos >= 0) {
      bVal = +b[bPos];
      bPos--;
    } else {
      bVal = 0;
    }

    const sum = aVal + bVal + carry;

    result.unshift(sum & 1)
    carry = sum >> 1;
  }

  return result.join('')
};
