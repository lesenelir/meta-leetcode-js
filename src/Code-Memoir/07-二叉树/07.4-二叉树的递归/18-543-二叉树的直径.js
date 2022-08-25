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
var diameterOfBinaryTree = function(root) {
  // 递归操作：计算根节点的左右最深的深度
  // 后序遍历
  let res = 0
  maxDepth(root)
  return res

  function maxDepth(node) {
    if (!node) return 0

    let leftDepth = maxDepth(node.left)
    let rightDepth = maxDepth(node.right)
    // 后序遍历位置
    let temp = leftDepth + rightDepth // 当前节点的返回直径
    res = Math.max(res, temp)

    return Math.max(leftDepth, rightDepth) + 1
  }

};
