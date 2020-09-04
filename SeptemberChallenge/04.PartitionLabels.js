var partitionLabels = function(S) {
  if (S.length === 0) return [];

  const results = [];
  const lastOccurrence = {};

  for (let i = 0; i < S.length; i++) {
    lastOccurrence[S[i]] = i;
  }

  let start = 0;
  let end = lastOccurrence[S[0]];

  for(let i = 0; i < S.length; i++) {
    end = Math.max(end, lastOccurrence[S[i]]);
    if (i === end) {
      results.push(i - start + 1);
      start = i + 1;
    }
  }

  return results;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))