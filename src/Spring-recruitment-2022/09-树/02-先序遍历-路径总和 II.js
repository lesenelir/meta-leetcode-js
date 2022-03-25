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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = []
  if (!root) return res
  dfs(root, 0, [])
  return res
  function dfs(root, sum, path) {
    if (!root) return
    sum += root.val
    path.push(root.val)
    if (!root.left && !root.right) {
      if (sum === targetSum) res.push(path.slice())
    } else {
      dfs(root.left, sum, path)
      dfs(root.right, sum, path)
    }
    path.pop()
  }
};
