// @see https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let r = -Infinity;
  let p = 0;
  for (let i = 0; i < nums.length; i += 1) {
    p = Math.max(p + nums[i], nums[i]);
    r = Math.max(r, p);
  }

  return r;
};
