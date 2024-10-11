/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  return num % 9 ? num % 9 : 9;
};

// 0 -> 0
// 01, 10 -> 1
// 02, 11, 20 -> 2
// 03, 12, 21, 30 -> 3
// 04, 13, 22, 31, 40 -> 4
// ...

// 38 % 9 -> 2
// 18 % 9 -> 0 -> 9
