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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  // 二叉树遍历做法
  let sum = 0,
      flag = false

  traversal(root)
  return flag

  function traversal(node) {
    if (!node) return

    // 单层递归逻辑 - 遍历
    sum += node.val // 前序位置 进入节点
    if (!node.left && !node.right && sum === targetSum) {
      flag = true
      return
    }
    traversal(node.left)
    traversal(node.right)
    sum -= node.val // 后序位置 离开节点
  }

};


var hasPathSum2 = function(root, targetSum) {
  // 递归函数要有返回值
  if (!root) return false
  return traversal(root, targetSum - root.val)

  function traversal(node, count) {
    // 递归终止条件
    if (!node.left && !node.right && count === 0) return true
    if (!node.left && !node.right) return false // 遇到叶子节点返回

    // 单层递归逻辑
    if (node.left) {
      if (traversal(node.left, count - node.left.val)) return true
    }
    if (node.right) {
      if (traversal(node.right, count - node.right.val)) return true
    }
    return false
  }

};
