/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
   this.rects = rects;
   this.prefixSum = this.makePrefix();
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  const rect = this.getRect();
  const x = rect[0] + Math.floor(Math.random() * (rect[2] - rect[0] + 1));
  const y = rect[1] + Math.floor(Math.random() * (rect[3] - rect[1] + 1));

  return [x, y];
};

Solution.prototype.makePrefix = function() {
  const prefixSum = new Array(this.rects.length);
  prefixSum[0] = ((this.rects[0][3] - this.rects[0][1] + 1) * (this.rects[0][2] - this.rects[0][0] + 1))

  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + ((this.rects[i][3] - this.rects[i][1] + 1) * (this.rects[i][2] - this.rects[i][0] + 1));
  }

  return prefixSum;
}

Solution.prototype.getRect = function() {
  const val = Math.floor(Math.random() * (this.prefixSum[this.prefixSum.length - 1] + 1));
  let min = 0;
  let max = this.prefixSum.length - 1;

  while (min < max) {
    const mid = min + Math.floor((max - min) / 2)
    if (this.prefixSum[mid] <= val) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return this.rects[min];
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */