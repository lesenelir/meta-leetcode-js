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

// 递归遍历节点方式来解决，
var minDepth2 = function(root) {
  // 二叉树问题有两种结局方案：1. 遍历二叉树是否能解决 2. 将二叉树分解成一个子树问题来解决，定义函数的意义
  if (!root) return 0
  let depth = 0, // 当前递归到的节点深度
      minDepth = Number.MAX_VALUE

  traversal(root)
  return minDepth

  function traversal(node) {
    if (!node) return 0

    // 单层递归逻辑 - 遍历
    depth++ // 前序位置
    if (!node.left && !node.right) { // 叶子节点
      minDepth = Math.min(minDepth, depth)
    }
    traversal(node.left)
    traversal(node.right)
    // 后序位置
    depth-- // 后序位置是离开一个节点，所以深度要--
  }

};
