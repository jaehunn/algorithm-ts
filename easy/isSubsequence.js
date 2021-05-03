/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // s.length < t.length
  let sIndex = 0;

  for (let index = 0; index < t.length; index += 1) {
    if (t[index] === s[sIndex]) sIndex += 1;
  }

  return sIndex === s.length;
};
