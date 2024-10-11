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
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const result = [];

  helper(root);

  return result;

  function helper(node, cur = []) {
    if (!node) return;

    cur.push(node.val);

    if (!node.left && !node.right) {
      result.push(cur.join("->"));

      return;
    }

    helper(node.left, [...cur]);
    helper(node.right, [...cur]);
  }
}
