var mincostTickets = function(days, costs) {
  if (!days.length) return 0;

  const calendar = new Array(days[days.length - 1] + 1).fill(0);
  const mins = new Array(days[days.length - 1] + 1).fill(0);

  for (let i = 0; i < days.length; i++) {
    calendar[days[i]] = 1;
  }

  for (let i = 1; i < calendar.length; i++) {
    if (calendar[i] === 0) {
      mins[i] = mins[i - 1];
    } else {
      mins[i] = Math.min(mins[i - 1] + costs[0], mins[Math.max(0, i - 7)] + costs[1], mins[Math.max(0, i - 30)] + costs[2]);
    }
  }

  return mins[days[days.length - 1]];
};

let tdays = [];
let tcost = [];
console.log(mincostTickets(tdays, tcost)); // 0

tdays = [1,4,6,7,8,20];
tcost = [2,7,15];
console.log(mincostTickets(tdays, tcost)); // 11

tdays = [1,2,3,4,5,6,7,8,9,10,30,31];
tcost = [2,7,15];
console.log(mincostTickets(tdays, tcost)); // 17

tdays = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,24,25,27,28,29,30,31,34,37,38,39,41,43,44,45,47,48,49,54,57,60,62,63,66,69,70,72,74,76,78,80,81,82,83,84,85,88,89,91,93,94,97,99];
tcost = [9,38,134];
console.log(mincostTickets(tdays, tcost)); // 423

tdays = [6,9,10,14,15,16,17,18,20,22,23,24,29,30,31,33,35,37,38,40,41,46,47,51,54,57,59,65,70,76,77,81,85,87,90,91,93,94,95,97,98,100,103,104,105,106,107,111,112,113,114,116,117,118,120,124,128,129,135,137,139,145,146,151,152,153,157,165,166,173,174,179,181,182,185,187,188,190,191,192,195,196,204,205,206,208,210,214,218,219,221,225,229,231,233,235,239,240,245,247,249,251,252,258,261,263,268,270,273,274,275,276,280,283,285,286,288,289,290,291,292,293,296,298,299,301,303,307,313,314,319,323,325,327,329,334,339,340,341,342,344,346,349,352,354,355,356,357,358,359,363,364];
tcost = [21,115,345];
console.log(mincostTickets(tdays, tcost)); // 3040


