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

  return getFather(root, p, q)

  // 二叉树 分解子问题
  function getFather(node, p, q) {
    if (!node) return
    if (node === p || node === q) return node

    let left = getFather(node.left, p, q)
    let right = getFather(node.right, p, q)

    // 如果以node节点可以找到p、q节点，则公共祖先是node
    if (left && right) return node
    if (left && !right) return left
    if (!left && right) return right
  }
};


