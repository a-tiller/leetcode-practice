var buddyStrings = function(A, B) {
  if (A.length !== B.length || A.length < 2) return false;

  if (A === B) {
    const letters = new Set(A);
    return letters.size < A.length;
  }

  const mismatch = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) mismatch.push(i);
  }

  return (mismatch.length === 2 && A[mismatch[0]] === B[mismatch[1]] && B[mismatch[0]] === A[mismatch[1]]);
};