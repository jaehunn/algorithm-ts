// @see https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let o = {};
  for (let i = 0; i < nums.length; i += 1) {
    // in or hasOwnProperty performance
    // https://andrew.hedges.name/experiments/in/
    if (nums[i] in o && i - o[nums[i]] <= k) return true;

    o[nums[i]] = i;
  }

  return false;
};
