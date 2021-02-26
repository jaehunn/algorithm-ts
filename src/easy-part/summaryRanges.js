/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
  let stk = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (stk.length && nums[i] === stk[stk.length - 1][1] + 1) stk[stk.length - 1][1] = nums[i];
    else stk.push([nums[i], nums[i]]);
  }

  return stk.map((v) => (v[0] !== v[1] ? v.join("->") : v[0] + ""));
}

function summaryRanges(nums) {
  var res = [];

  let start = nums[0];
  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(start === nums[i] ? nums[i] + "" : start + "->" + nums[i]);

      start = nums[i + 1];
    }
  }
  return res;
}
