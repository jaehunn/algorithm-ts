// @see https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = {}; // { value: index }
  for (let i = 0; i < nums.length; i += 1) {
    let c = target - nums[i];

    // index: 0 -> 'in' object
    if (c in m) return [m[c], i];
    // if (m[c] !== undefined) return [m[c], i];

    m[nums[i]] = i;
  }

  return null;
};


