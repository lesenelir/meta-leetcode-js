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
var getMinimumDifference = function(root) {
  // 思路：中序遍历二叉搜索树，计算有序数组之间最小的差值
  let res = [],
      result = Number.MAX_VALUE
  traversal(root)
  for (let i = 1; i < res.length; i++) {
    result = Math.min(result, res[i] - res[i - 1])
  }
  return result

  function traversal(node) {
    // 递归终止条件
    if (!node) return

    // 单层递归逻辑
    if (node.left) traversal(node.left)
    res.push(node.val)
    if (node.right) traversal(node.right)
  }

  // Note：二叉搜索树优先考虑中序遍历是一个有序的数组
};
