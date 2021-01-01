var findRepeatedDnaSequences = function(s) {
  const seen = new Set();
  const results = new Set();

  for (let i = 10; i <= s.length; i++) {
    const sub = s.slice(i - 10, i);

    if (seen.has(sub)) results.add(sub);
    seen.add(sub);
  }

  return [...results]
};