// @see https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const r = nums.splice(0, k + 1);

  return nums.concat(r);
};

var _rotate = function (nums, k) {
  let r = [];
  for (let i = 0; i < nums.length; i += 1) {
    r[(i + k) % nums.length] = nums[i];
  }

  return r;
};

console.log(_rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [1 2 3 4 5 6 7 1 2 3]
// [0 0 0 1 2 3 4]
// [5 6 7 1 2 3 4]
