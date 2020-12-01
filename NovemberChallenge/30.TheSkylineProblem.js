var getSkyline = function(buildings) {
  buildings.sort((a, b) => (a[0] === b[0] ? b[2] - a[2] : a[0] - b[0]));

  const buildingStack = [];
  const keyPoints = [];

  for (let i = 0; i < buildings.length; i++) {
    const current = buildings[i];

    while (buildingStack.length && buildingStack[buildingStack.length - 1][1] < current[0]) {
      processStepDown(buildingStack, keyPoints);
    }

    // process step-up
    if (!buildingStack.length || current[2] > buildingStack[buildingStack.length - 1][2]) {
      keyPoints.push([current[0], current[2]])
    }

    buildingStack.push(current);
    maintainStack(buildingStack, keyPoints[keyPoints.length - 1]);
  }

  // unwind stack
  while (buildingStack.length) {
    processStepDown(buildingStack, keyPoints);
  }

  return keyPoints;
};

function maintainStack(stack, lastKeyPoint) {
  // move new building into height order
  let position = stack.length - 1;
  while (position > 0 && (stack[position - 1] === null || stack[position][2] < stack[position - 1][2])) {
    [stack[position], stack[position - 1]] = [stack[position - 1], stack[position]];
    position--;
  }

  // replace superceded buildings with tombstones
  for (let i = 0; i < position; i++) {
    if (stack[i] === null) continue;

    if (stack[position][1] >= stack[i][1] || stack[i][1] < lastKeyPoint[0]) {
      stack[i] = null;
    }
  }

  // clean up leading and trailing tombstones
  while (stack.length && stack[0] === null) stack.shift();
  while (stack.length && stack[stack.length - 1] === null) stack.pop();
}

function processStepDown(buildingStack, keyPoints) {
  maintainStack(buildingStack, keyPoints[keyPoints.length - 1]);

  let ended = buildingStack.pop();
  while (buildingStack[buildingStack.length - 1] === null) buildingStack.pop();

  if (ended[1] === keyPoints[keyPoints.length - 1][0]) keyPoints.pop();

  if (buildingStack.length) keyPoints.push([ended[1], buildingStack[buildingStack.length - 1][2]]);
  else keyPoints.push([ended[1], 0]);
}