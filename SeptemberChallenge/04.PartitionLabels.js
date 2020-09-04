var partitionLabels = function(S) {
  if (S.length === 0) return [];

  const results = [];
  const characterMap = new Map();

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (!characterMap.has(char)) {
      characterMap.set(char, new Set());
    }
    characterMap.get(char).add(i);
  }

  let max = Math.max(...characterMap.get(S[0]));
  let extend = true;

  while (extend) {
    extend = false;
    const toCheck = new Set(S.slice(1,max));
    toCheck.forEach((char) => {
      const lastOccurrence = Math.max(...characterMap.get(char))
      if (lastOccurrence > max) {
        max = lastOccurrence;
        extend = true;
      }
    });
  }
  results.push(max + 1);
  return results.concat(partitionLabels(S.slice(max + 1)));
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))