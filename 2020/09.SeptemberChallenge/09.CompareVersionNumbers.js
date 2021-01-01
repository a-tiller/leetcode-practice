var compareVersion = function(version1, version2) {
   const v1Array = version1.split('.');
   const v2Array = version2.split('.');
   const last = Math.max(v1Array.length, v2Array.length);

   for (let i = 0; i < last; i++) {
     const val1 = +v1Array[i] || 0;
     const val2 = +v2Array[i] || 0;

     if (val1 > val2) return 1;
     if (val1 < val2) return -1;
   }

   return 0;
};

let test1 = '';
let test2 = '';
console.log(compareVersion(test1, test2)); // 0


test1 = '0.1';
test2 = '1.1';
console.log(compareVersion(test1, test2)); // -1

test1 = '1.0.1';
test2 = '1';
console.log(compareVersion(test1, test2)); // 1

test1 = '7.5.2.4';
test2 = '7.5.3';
console.log(compareVersion(test1, test2)); // -1

test1 = '1.01';
test2 = '1.001';
console.log(compareVersion(test1, test2)); // 0

test1 = '1.0';
test2 = '1.0.0';
console.log(compareVersion(test1, test2)); // 0

