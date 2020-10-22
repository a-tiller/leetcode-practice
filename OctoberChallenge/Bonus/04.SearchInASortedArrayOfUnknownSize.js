var search = function (reader, target) {

  let min = 0;
  let max = 1;

  while(reader.get(max) < target) max <<= 1;

  while(min <= max) {
    const mid = Math.floor((min + max) / 2);
    const val = reader.get(mid)
    if (val === target) return mid;
    else if (val > target) max = mid - 1;
    else min = mid + 1;
  }

  return -1;
};