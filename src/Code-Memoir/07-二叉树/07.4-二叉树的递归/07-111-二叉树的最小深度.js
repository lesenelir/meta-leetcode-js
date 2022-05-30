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
var minDepth = function(root) {
  // 思路： 获取某一个节点
  return getDepth(root)

  // 获取每一个节点深度的函数
  function getDepth(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层递归逻辑 - 找该节点最小深度
    let depth = 0
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    if (node.left && !node.right) {
      depth = leftDepth
    }
    if (!node.left && node.right) {
      depth = rightDepth
    }
    if (node.left && node.right) {
      depth = Math.min(leftDepth, rightDepth)
    }
    return depth + 1
  }

};
