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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  let res = []
  middleDfs(root)
  for (let i = 0; i < res.length; i++) {
    if (res[i] < res[i-1]) {
      return false
    }
  }
  return true
  function middleDfs(root) {
    if (root) {
      middleDfs(root.left)
      res.push(root.val)
      middleDfs(root.right)
    }
  }
};
