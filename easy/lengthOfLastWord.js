// @see https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */

// native methods
function lengthOfLastWord(str) {
  return str.trim().split(" ")[-1].length;
}
