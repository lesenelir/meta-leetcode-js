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
  // 思路：二叉搜索树有序自带顺序
  return traversal(root, p, q)

  function traversal(node, p, q) {
    // 递归终止条件
    if (!node) return node

    // 单层递归逻辑
    if (node.val > p.val && node.val > q.val) { // 左子树查询
      let left = traversal(node.left, p, q)
      if (left) return left
    }
    if (node.val < p.val && node.val < q.val) { // 右子树查询
      let right = traversal(node.right, p, q)
      if (right) return right
    }
    return node

  }

};
