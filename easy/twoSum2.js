// @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    let c = target - numbers[i];

    let cI = numbers.indexOf(c, i + 1);
    if (~cI) return [i + 1, cI + 1];
  }
};

function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (numbers[i] + numbers[j] !== target) {
    numbers[i] + numbers[j] < target ? i++ : j--;
  }

  return [i + 1, j + 1];
}

function _twoSum(numbers, target) {
  let o = {};
  for (let i = 0; i < numbers.length; i += 1) {
    let c = target - numbers[i];

    if (c in o) return [o[c] + 1, i + 1];

    o[numbers[i]] = i;
  }
}
