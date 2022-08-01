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
var invertTree = function(root) {

  return traversal(root)

  function traversal(node) {
    // 递归终止条件
    if (!node) {
      return node
    }

    // 单层递归逻辑
    ;[node.left, node.right] = [node.right, node.left]
    traversal(node.left)
    traversal(node.right)
    return node
  }

};
