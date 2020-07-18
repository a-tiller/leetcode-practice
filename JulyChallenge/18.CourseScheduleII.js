var findOrder = function(numCourses, prerequisites) {
  const reqCounts = new Array(numCourses).fill(0);

  const reqs = new Map();

  prerequisites.forEach(([c, p]) => {
    reqCounts[c]++;

    if (reqs.has(p)) {
      reqs.get(p).push(c);
    } else {
      reqs.set(p, [c]);
    }
  });

  const path = [];
  const queue = [];

  const enqueue = () => {
    reqCounts.forEach((count, course) => {
      if (count === 0) {
        queue.push(course);
      }
    });
  };

  enqueue();

  while (queue.length > 0) {
    const current = queue.shift();

    path.push(current);

    if (reqs.has(current)) {
      const unlock = reqs.get(current);

      unlock.forEach(course => {
        reqCounts[course]--;
        if (reqCounts[course] === 0) {
          queue.push(course);
        }
      })
    }
  }

  if (path.length === numCourses) {
    return path;
  }

  return [];
};
