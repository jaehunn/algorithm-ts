// @see https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let o = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (o[nums[i]]) return true;

    o[nums[i]] = 1;
  }

  return false;
};

function containsDuplicate(nums) {
  return new Set(nums).size < nums.length;
}

function _containsDuplicate(nums) {
  return nums.sort().some((v, i) => v === nums[i - 1]);
}
