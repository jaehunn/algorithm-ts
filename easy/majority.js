// @see https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const o = {};
  nums.forEach((v) => {
    o[v] = o[v] + 1 || 1;
    // o[v] = (o[v] || 0) + 1;

    if (o[v] > nums.length / 2) return o[v];
  });

  return r;
};

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  return nums[(nums.length / 2) << 0];
};
