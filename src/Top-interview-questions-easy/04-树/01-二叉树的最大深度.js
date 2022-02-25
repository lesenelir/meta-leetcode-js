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
  if (root === null) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


console.log(Math.max(1, 2))

// Note: 二叉树的题目多涉及递归操作
