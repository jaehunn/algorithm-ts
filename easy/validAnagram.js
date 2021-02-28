/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  return hlpr(s) === hlpr(t);
}

function hlpr(s) {
  return Array.from(s).sort().join("");
}
