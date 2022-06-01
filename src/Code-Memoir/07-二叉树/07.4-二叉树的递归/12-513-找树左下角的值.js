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
var findBottomLeftValue = function(root) {
  // 思想： 递归确定最后一行 和 第一个元素
  // 确定二叉树的最后一行可以通过二叉树深度最大确定
  let maxDepth = 0
  let maxValue = 0
  dfsTree(root, 1)
  return maxValue

  function dfsTree(node, curDepth) {
    // 递归终止条件
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth
        maxValue = node.val
      }
      return
    }

    // 单层递归逻辑
    if (node.left) dfsTree(node.left, curDepth + 1)
    if (node.right) dfsTree(node.right, curDepth + 1)
    return
  }

};
