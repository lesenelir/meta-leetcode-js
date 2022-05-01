/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  // 二叉搜索树的中序遍历就是一个有序列表 从小到大
  // 如果要从大到小遍历则可以先遍历右节点
  let res = 0
  inOrder(root)
  return res

  function inOrder(node) {
    if (!node) return
    inOrder(node.right) // 先遍历右节点
    k--
    if (k === 0) {
      res = node.val
      return
    }
    inOrder(node.left)
  }
};

// Note： 此题目的关键在于剪枝 优化
