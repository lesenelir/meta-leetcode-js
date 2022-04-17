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
  return getDepth(root)

  function getDepth(node) {
    if (!node) return 0
    let depth = 0
    let rightDepth = getDepth(node.right)
    let leftDepth = getDepth(node.left)
    if (!node.left && node.right) {
      depth = rightDepth
    }
    if (node.left && !node.right) {
      depth = leftDepth
    }
    if (node.left && node.right) {
      depth = Math.min(rightDepth, leftDepth)
    }
    return depth + 1
  }

};

// Note: 求二叉树的最大深度和最小深度的递归算法的主要区别：处理左右孩子不为空的逻辑
