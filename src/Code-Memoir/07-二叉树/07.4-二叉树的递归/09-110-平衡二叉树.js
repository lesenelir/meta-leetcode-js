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
var isBalanced = function(root) {
  // 遍历二叉树，计算该节点的所有最大的高度
  // 将该二叉树问题转换为子问题
  let flag = true
  maxDepth(root)
  return flag

  // 函数定义：用来求出二叉树的最高深度
  // 单层递归逻辑： 对于一个节点深度而言，找左节点的深度 和 右节点的深度，取最大的值 + 1 作为该节点的最大深度
  function maxDepth(node) {
    if (!node) return 0

    let leftDepth = maxDepth(node.left)
    let rightDepth = maxDepth(node.right)
    // 后序时间位置，出节点时，判断当前节点的左右深度
    if (Math.abs(leftDepth - rightDepth) > 1) {
      flag = false
    }
    return 1 + Math.max(leftDepth, rightDepth)
  }
}


var isBalanced2 = function(root) {
  // 思路： 递归 某节点的左右子树的高度
  return getDepth(root) !== -1

  // 查询某个节点左右子树高度差的函数
  function getDepth(node) {
    if (!node) return 0 // 递归出口

    // 单层逻辑 - 对于某一个节点计算该节点的 左子树高度 和 右子树高度，并做相减
    let leftNum = getDepth(node.left)
    if (leftNum === -1) return -1
    let rightNum = getDepth(node.right)
    if (rightNum === -1) return -1
    if (Math.abs(leftNum - rightNum) > 1) { // 当某节点的左右子树高度相差大于1 则返回-1
      return -1
    } else {
      return 1 + Math.max(leftNum, rightNum)
    }
  }
};
