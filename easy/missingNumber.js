/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums, l = nums.length) {
  let res = (l * (l + 1)) / 2;

  let cur = 0;
  nums.forEach((num) => (cur += num));

  return res - cur;
}
