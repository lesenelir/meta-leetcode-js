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
var maxDepth = function(root) {

  return getDepth(root)

  function getDepth(node) {
    if (node === null) return 0
    let rightDepth = getDepth(node.right)
    let leftDepth = getDepth(node.left)
    let depth = 1 + Math.max(rightDepth, leftDepth)
    return depth
  }

};
