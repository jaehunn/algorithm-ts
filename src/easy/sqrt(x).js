// @see https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */

// wip
// binary search
function mySqrt(x) {
  let l = 0;
  let r = x;

  // l === r break
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (m * m === x) return m;

    if (x < m * m) r = m - 1;
    else l = m + 1;
  }

  return x < r * r ? r - 1 : r;
}

function mySqrt(x) {
  if (x === 0) return 0;

  let l = 1;
  let r = x;

  let m = 0;
  while (l + 1 < r) {
    m = Math.floor((l + r) / 2);

    if (x === m * m) return m;

    x < m * m ? (r = m) : (l = m);
  }

  return l;
}
q;
