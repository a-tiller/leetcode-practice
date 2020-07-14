var angleClock = function(hour, minutes) {

  const minuteAngle = minutes * 6;

  const hourAngle = ((hour % 12) * 30) + ((minutes / 60) * 30);

  const lower = Math.min(minuteAngle, hourAngle);

  const higher = Math.max(minuteAngle, hourAngle);

  return Math.min(higher - lower, lower + 360 - higher);
};