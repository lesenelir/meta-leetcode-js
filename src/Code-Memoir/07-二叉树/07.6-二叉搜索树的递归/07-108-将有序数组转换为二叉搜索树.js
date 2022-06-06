/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 构建平衡二叉搜索树
  return buildTree(nums, 0, nums.length - 1)

  function buildTree(nums, left, right) {
    // 递归终止条件
    if (left > right) {
      return null
    }

    // 单层递归逻辑
    let mid = Math.floor((left + right) / 2)
    let root = new TreeNode(nums[mid])
    root.left = buildTree(nums, left, mid - 1)
    root.right = buildTree(nums, mid + 1, right)
    return root
  }

};
