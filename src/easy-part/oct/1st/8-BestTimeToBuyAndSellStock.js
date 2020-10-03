// #see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i += 1) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return max;
};

//       7 1 5 3 6 4
//  min: 7 1 1 1 1 1
//  max: 0 0 4 2 (5) 3

function maxProfit(prices) {
  let min = -Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
}
