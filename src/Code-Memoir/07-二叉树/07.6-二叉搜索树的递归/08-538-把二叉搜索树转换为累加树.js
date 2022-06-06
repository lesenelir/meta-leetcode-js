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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  // 思路：累加顺序右中左 - 反中序
  if (!root) return null
  let pre = 0
  return traversal(root)

  function traversal(node) {
    // 递归终止条件
    if (!node) return

    // 单层递归逻辑
    // 右中左
    traversal(node.right)
    node.val += pre
    pre = node.val
    traversal(node.left)
    return node
  }

};
