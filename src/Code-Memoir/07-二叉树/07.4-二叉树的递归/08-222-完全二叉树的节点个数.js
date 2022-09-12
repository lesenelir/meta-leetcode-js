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
  // 拆解子问题思想：将一棵二叉树拆解为子节点。函数定义：传入一个根节点，函数返回二叉树节点的个数
  function getNodes(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层遍历逻辑 - 计算该节点左子树节点个数 和 右子树节点个数 + 1（自身）
    let leftNum = getNodes(node.left)
    let rightNum = getNodes(node.right)
    return leftNum + rightNum + 1
  }
};

var countNodes2 = function(root) {
  // 二叉树的问题有两个方式解决： 1. 遍历整颗二叉树来解决 2. 将二叉树分解为子树问题来解决

  // 求完全二叉树的节点个数，通过遍历的方式
  let num = 0
  traversal(root)
  return num

  function traversal(node) {
    if (!node) return

    // 单层递归逻辑 - 遍历
    num++ // 前序位置：进入节点，则num++
    traversal(node.left)
    traversal(node.right)
  }

};
