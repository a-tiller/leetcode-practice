var findOrder = function(numCourses, prerequisites) {
  let stack = [];

  const allCourses = new Array(numCourses).fill(true);

  const next = function(path = [], remain = allCourses, prereqs = prerequisites) {
    for (let i = 0; i < remain.length; i++) {
      if (remain[i]) {
        if (checkPrereq(i, path, prereqs)) {
          const rest = [...remain];
          rest[i] = false;
          stack.push([path.concat([i]), rest])
        }
      }
    }
  };

  const checkPrereq = function(num, path, prereqs) {
    const required = [];

    prereqs.forEach(([n, r]) => {
      if (n === num) required.push(r);
    });

    for (let i = 0; i < required.length; i++) {
      if (path.indexOf(required[i]) === -1) {
        return false;
      }
    }

    return true;
  }

  next();

  while(stack.length) {
    let [currentPath, currentRemaining] = stack.pop();

    if (currentPath.length === numCourses) {
      return currentPath;
    }

    next(currentPath, currentRemaining);
  }

  return [];

};
