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
  // 二叉树的递归分解为：遍历问题 、 划分子问题
  return getFather(root, p, q)

  // 函数定义：输入node、p、q两个节点 返回以node为节点的最近的公共节点
  function getFather(node, p, q) {
    if (!node) return null
    if (node === p || node === q) return node

    let left = getFather(node.left, p, q)
    let right = getFather(node.right, p, q)

    // 如果以node节点都能找到p q 则最近公共组件为node
    if (left && right) return node
    if (left && !right) return left
    if (!left && right) return right
  }

};
