var isRobotBounded = function(instructions) {
  let facing = 0;
  let loc = [0, 0];
  const offset = [[0, 1], [-1, 0], [0, -1], [1, 0]];

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    if (instruction === 'L') {
      facing = (facing + 1) % 4;
    }
    else if (instruction === 'R') {
      facing = (facing + 3) % 4;
    } else {
      loc[0] += offset[facing][0];
      loc[1] += offset[facing][1];
    }
  }

  return (loc[0] === 0 && loc[1] === 0) || (facing !== 0);
};
