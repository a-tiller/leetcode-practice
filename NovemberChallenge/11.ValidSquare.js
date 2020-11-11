var validSquare = function(p1, p2, p3, p4) {

  const points = [p1, p2, p3, p4].sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });


  function distance (a, b) {
    return Math.sqrt((Math.abs(a[0] - b[0]) ** 2) + (Math.abs(a[1] - b[1]) ** 2));
  }

  if (distance(points[0], points[3]) === distance(points[1], points[2]) // diagonals
     && distance(points[0], points[1]) === distance(points[2], points[3]) // opposite sides
     && distance(points[0], points[2]) === distance(points[2], points[3]) // consecutive sides
     && distance(points[0], points[1]) > 0) return true; // stupid 4x same point edge case I missed

  return false;

};