// @see https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let h = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let _s = Array.from(s);
  let stk = [];
  while (_s.length) {
    const v = _s.shift();

    if (v in h) stk.push(h[v]);
    else if (v !== stk.pop()) return false;
  }

  return !stk.length;
};
