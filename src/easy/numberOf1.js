// @see https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let r = 0;
  while (n) {
    r += n & 1;
    n >>>= 1;
  }

  return r;
};

var hammingWeight = function (n) {
  let r = 0;
  while (n) {
    n &= n - 1;

    r += 1;
  }

  return r;
};

function hammingWeight(n) {
  return n.toString(2).split("0").join("").length;
}

function hamminWeight(n) {
  return n.toString(2).replace(/0/g, "").length;
}

console.log(_hammingWeight(14)); // 14

// 1110
// 1101
// 1100 -
// 1011
// 1000 -
// 0111
// 0000 -
// 3
