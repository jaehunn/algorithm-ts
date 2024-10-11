// @see https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let r = 0;

  for (let i = 5; i <= n; i *= 5) {
    r += (n / i) << 0;
  }

  return r;
};

console.log(trailingZeroes(7));

// make zero
// 1 * 10 = 10
// 1 * 2 * 5 = 10
// 2 * 2 * 5 = 20 (1)
// 2 * 2 * 5 * 5 = 100 (2)

// 2: 2 4 6 8 10
// 5: 5       10

// depend on five

// if 500!
// 5 5^2 5^3 ... 500
// 100 + 20 + 4 = (124)
