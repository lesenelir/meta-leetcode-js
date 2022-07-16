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
  // 二叉树最大深度
  return traversal(root)

  function traversal(node) {
    // 递归终止条件
    if (!node) {
      return 0
    }

    // 单层递归逻辑
    // 对于一个节点的最大深度就是左右节点的最大深度+1
    let leftDepth = traversal(node.left),
        rightDepth = traversal(node.right)

    return Math.max(leftDepth, rightDepth) + 1
  }

};
