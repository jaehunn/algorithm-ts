// @see https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let r = 0;
  let cnt = 32;

  while (cnt--) {
    r <<= 1;
    r += n & 1;

    n >>= 1;
  }

  return r;
};

// 8 = 0000 0000 0000 0000 0000 0000 0000 0100
//     1111 1111 1111 1111 1111 1111 1111 1011 = 268425456
console.log(reverseBits(-1) === reverseBits(~0)); // true

// 1 -> 2147483648 (2^31)
// 0 -> 0
// -1 -> 4294967295 (2^32)

// [-2^32 ...2^31]

// 2^2
// [-2^2 ...2^1]
// [-4 -2 -1 0 1 2]
// -> (-4 -2 -1)
// -> (0 1 2)

console.log(~-1); // 0
console.log(~1); // -2

// complement pair
// -1 0
// -2 1

function _reverseBits(n) {
  let r = 0;
  for (let i = 0; i < 32; i += 1) {
    r <<= 1;
    r |= n & 1; // 0 -> 1, 0 -> 0
    n >>= 1;
  }

  return r >>> 0;
}

console.log(_reverseBits(8));

// 0 0 - 0
// 0 1 - 1
// 1 0 - 1
// 1 1 - 1

console.log(0 | 0); // 0
console.log(0 | 1); // 1
console.log(1 | 1); // 1

console.log(2 | 1); // 3
console.log(3 | 1); // 3

console.log(4 | 1); // 5

console.log(-1 >>> 0); // 4294967295
