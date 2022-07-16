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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  traversal(root)
  return res

  function traversal(node) {
    // 递归终止条件
    if (!node) return

    // 单层递归逻辑
    traversal(node.left)
    res.push(node.val)
    traversal(node.right)
  }

};
