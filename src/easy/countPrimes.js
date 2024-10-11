// @see https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  let f = [];
  let r = 0;

  for (let i = 2; i < n; i += 1) {
    if (f[i] === undefined) {
      f[i] = 1;
      r += 1;

      let j = i; // multiple
      while (i * j < n) {
        f[i * j] = 0;
        j += 1;
      }
    }
  }

  return r;
}

function _countPrimes(n) {
  const nums = [...Array(n).keys()].slice(2);

  // nums = [2,3,4,5,6,7,8,9]
  for (let i = 0; i < Math.sqrt(n) << 0; i += 1) {
    for (let j = i + nums[i]; j <= n; j += nums[i]) {
      nums[j] = undefined;
    }
  }

  return nums.filter((n) => n).length;
}

console.log(_countPrimes(10)); // 2 3 5 7
