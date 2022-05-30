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
  // 思路： 找根节点的深度
  return getDepth(root)

  // 查找每一个节点的深度函数
  function getDepth(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层递归逻辑： 对于一个节点深度而言，找左节点的深度 和 右节点的深度，取最大的值 + 1 作为该节点的最大深度
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    return Math.max(leftDepth, rightDepth) + 1
  }

};
