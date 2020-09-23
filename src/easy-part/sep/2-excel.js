// @see https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n === 0) return;

  let result = [];
  while (n) {
    let r = n % 26;
    let d = (n / 26) << 0;

    // 26 -> (0, 0) -> (-1, 26)
    if (r === 0) {
      r = 26;
      d -= 1;
    }

    result.unshift(String.fromCharCode(64 + r));
    n = d;
  }

  return result.join("");
};

console.log(convertToTitle(703)); // zzz
