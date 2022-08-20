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
var constructMaximumBinaryTree = function(nums) {
  // 构建二叉树
  // 递归构建二叉树，从start 到 end 范围内构建二叉树
  return buildTree(nums, 0, nums.length - 1)

  function buildTree(nums, start, end) {
    // 递归终止条件
    if (start > end) {
      return null
    }

    // 单层递归逻辑
    // 1. 找最大值
    let maxValue = 0,
        maxIndex = start
    for (let i = start; i <= end; i++) {
      if (nums[i] > maxValue) {
        maxValue = nums[i]
        maxIndex = i
      }
    }
    // 2. 构建二叉树
    let node = new TreeNode(maxValue)
    node.left = buildTree(nums, start, maxIndex - 1)
    node.right = buildTree(nums, maxIndex + 1, end)
    return node
  }

};
