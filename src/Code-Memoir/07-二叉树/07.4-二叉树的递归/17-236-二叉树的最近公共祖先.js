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
  // 二叉树的递归问题可以分解为：1. 二叉树的遍历解决  2. 将二叉树分解为子问题（子树）
  // 找最近公共祖先，需要从底向上遍历，只能通过“后序遍历”
  return traversal(root, p, q)

  // 函数定义：输入node，p，q 返回这个node节点为二叉树的p，q最近的公共祖先节点（返回一个节点）
  function traversal(node, p, q) {
    if (!node) return null
    if (node === p || node === q) return node

    let left = traversal(node.left, p, q) // node的左子树
    let right = traversal(node.right, p, q) // node的右子树
    // 后序位置
    // 后序位置可以返回通过函数返回回来的值
    if (left && right) return node
    if (left && !right) return left
    if (!left && right) return right
  }

};


var lowestCommonAncestor2 = function(root, p, q) {
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
