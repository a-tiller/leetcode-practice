var findMinArrowShots = function(points) {
  points.sort((a, b) => (a[1] - b[1]));

  let arrows = 0;

  while (points.length) {
    const [start, end] = points.shift();
    arrows++;
    while(points.length && points[0][0] <= end) {
      points.shift();
    }
  }

  return arrows;
};

let points = [];
console.log(findMinArrowShots(points)); // 0

points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points)); // 2

points = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points)); // 4

points = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points)); // 2

points = [[1,2]];
console.log(findMinArrowShots(points)); // 1

points = [[2,3],[2,3]];
console.log(findMinArrowShots(points)); // 1

