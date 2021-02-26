// @see https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const diff = (v) => {
    const A = "A".charCodeAt(0); // 65
    const B = v.charCodeAt(0);

    return B - A;
  };

  let r = 1;
  while (s.length) {
    const _s = s.slice(0, 1);
    const c = diff(_s);
    r += c;

    s = s.slice(1);
    if (s.length) {
      r *= 26;
      r += 1;
    }
  }

  return r;
};

var titleToNumber = function (s) {
  const B = "A".charCodeAt(0) - 1; // 64
  let r = 0;

  for (let i = 0; i < s.length; i += 1) {
    r += (s.charCodeAt(i) - B) * Math.pow(26, s.length - i - 1);
  }

  return r;
};

var _titleToNumber = function (s) {
  let r = 0;
  let p = 1;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    r += p * (s.charCodeAt(i) - 64);

    p *= 26;
  }

  return r;
};
