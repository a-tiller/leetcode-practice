var findOrder = function(numCourses, prerequisites) {
  const reqCounts = new Array(numCourses).fill(0);

  const reqs = new Map();

  prerequisites.forEach(([c, p]) => {
    reqCounts[c]++;

    if (reqs.has(c)) {
      reqs.get(c).add(p);
    } else {
      const prereq = new Set([p]);
      reqs.set(c, prereq);
    }
  });

  const path = [];
  const queue = [];

  const enqueue = () => {
    reqCounts.forEach((count, course) => {
      if (count === 0) {
        queue.push(course);
        reqCounts[course]--;
      }
    });
  };

  enqueue();

  while (queue.length > 0) {
    const current = queue.shift();

    path.push(current);

    reqs.forEach((r, c) => {
      if (r.has(current)) {
        reqCounts[c]--;
      }
    });

    enqueue();
  }

  if (path.length === numCourses) {
    return path;
  }

  return [];
};
