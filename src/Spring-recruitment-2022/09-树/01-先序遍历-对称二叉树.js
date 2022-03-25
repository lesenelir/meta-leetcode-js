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
var isSymmetric = function(root) {
  if (!root) return true
  return check(root.left, root.right)

  function check(left, right) {
    // 同时为空 则都是叶子节点返回true
    if (left === null && right === null) return true
    // 左右子树有一个为空，或者值不同 返回false
    if (left === null || right === null || left.val !== right.val) return false
    // 递归
    return check(left.left, right.right) && check(left.right, right.left)
  }
};


// Note: 二叉树利用递归深度周游、二叉树利用队列广度周游
