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
 * @return {number}
 */
var countNodes = function(root) {
  // 思路：递归
  return getNodes(root)

  // 计算某一个节点树的节点个数函数
  function getNodes(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层遍历逻辑 - 计算该节点左子树节点个数 和 右子树节点个数 + 1（自身）
    let leftNum = getNodes(node.left)
    let rightNum = getNodes(node.right)
    return leftNum + rightNum + 1
  }
};
