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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  // 根据二叉搜索树的节点重新构建二叉树
  return buildTree(root)

  // 函数定义：划分子问题，构建二叉树
  function buildTree(node) {
    if (!node) return null

    if (node.val < low) { // 当前节点小于low，删除该节点的左节点
      return buildTree(node.right)
    }
    if (node.val > high) { // 当前节点大于high，删除该节点的右节点
      return buildTree(node.left)
    }

    node.left = buildTree(node.left)
    node.right = buildTree(node.right)
    return node
  }

};
