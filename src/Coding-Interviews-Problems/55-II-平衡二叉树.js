/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 二叉树的递归有两种方式： 遍历整棵树解决 、 讲树问题分解为子树划分问题规模来解决
  // 遍历到一个节点，计算这个节点的左右子树的深度
  let flag = true

  maxDepth(root)
  return flag

  // 划分为子问题 - 输入一个节点，返回以该节点为根的二叉树的最大深度
  function maxDepth(node) {
    if (!node) return 0
    if (!flag) return

    let leftDepth = maxDepth(node.left)
    let rightDepth = maxDepth(node.right)
    if (Math.abs(leftDepth - rightDepth) > 1) {
      flag = false
    }

    return Math.max(leftDepth, rightDepth) + 1
  }

};
