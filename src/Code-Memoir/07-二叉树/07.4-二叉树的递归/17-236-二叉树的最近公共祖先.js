/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 思路：使用后序遍历方式，从底向上遍历
  // 后序遍历是天然的回溯过程
  return traversal(root, p, q)

  function traversal(node, p, q) {
    // 递归终止条件
    if (!node || node === p || node === q) {
      return node
    }

    // 单层递归逻辑
    let left = traversal(node.left, p, q)
    let right = traversal(node.right, p, q)
    if (left && right) return node
    if (!left) return right
    return left
  }

};
