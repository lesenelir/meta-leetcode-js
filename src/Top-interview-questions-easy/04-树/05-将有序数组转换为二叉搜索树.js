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
var sortedArrayToBST = function (nums) {

  return DFS(nums, 0, nums.length - 1)

  function DFS(nums, start, end) {
    if (start > end) return null
    // 以升序节点数组的中间元素作为根节点root
    let mid = start + Math.floor((end - start) / 2)
    let root = new TreeNode(nums[mid])
    // 递归的构建，左右子树
    root.left = DFS(nums, start, mid - 1)
    root.right = DFS(nums, mid + 1, end)
    return root
  }

};
