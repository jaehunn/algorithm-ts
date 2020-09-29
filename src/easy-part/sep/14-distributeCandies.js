// @see https://leetcode.com/problems/distribute-candies/

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};

distributeCandies([1, 1, 2, 2]);
// type > length / 2, length /2
// type < length / 2, type

// [ 1 1 1 1 ] -> 1 < 2, 1
// [ 1 1 1 2 ] -> 2 == 2, 2
// [ 1 2 3 4 ] -> 4 > 2, 2
