// @see https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;
  if (climbStairs[n]) return climbStairs[n];

  return (climbStairs[n] = climbStairs(n - 1) + climbStairs(n - 2));
};

// 1: 1 + (0) => 1
// 2: 1 + (1) / 2 + (0) => 2
// 3: 1 + (2) / 2 + (1) => 2 + 1
// 4: 1 + (3) / 2 + (2) => 3 + 2
// 5: 1 + (4) / 2 + (3) => 5 + 3
// 6: 1 + (5) / 2 + (4) => 8 + 5
// ...
// n: 1 = (n-1) / 2 + (n-2) => f(n - 1) + f(n - 2)

function climbStairs(n) {
  if (n < 3) return n;

  let arr = [1, 2];
  for (let i = 2; i < n; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n - 1];
}
