// @see https://leetcode.com/problems/longest-univalue-path/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (!root) return 0;

  return Math.max(
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right),
    straightUnivaluePath(root.left, root.val) + straightUnivaluePath(root.right, root.val)
  );
};

var straightUnivaluePath = function (node, uniVal) {
  if (!node || node.value !== uniVal) return 0;

  return Math.max(straightUnivaluePath(node.left, uniVal), straightUnivaluePath(node.right, uniVal)) + 1;
};

function longestUnivaluePath(root) {
  var max = 0;
  helper(root);
  return max;

  function helper(node) {
    if (!node) return 0;

    var left = helper(node.left);
    var right = helper(node.right);

    if (node.left) left += node.left.val === node.val ? 1 : -left;
    if (node.right) right += node.right.val === node.val ? 1 : -right;

    max = Math.max(max, left + right);

    return Math.max(left, right);
  }
}
