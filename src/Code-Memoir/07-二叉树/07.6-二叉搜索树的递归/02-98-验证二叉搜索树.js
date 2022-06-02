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
 * @return {boolean}
 */
var isValidBST = function(root) {
  // 二叉搜索树的中序遍历是有序的
  let res = []
  traversal(root)
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) return false
  }
  return true

  function traversal(node) {
    // 递归终止条件
    if (!node) {
      return
    }

    // 单层递归逻辑
    // 此时 - node节点不为空，则进行中序遍历
    if (node.left) traversal(node.left)
    res.push(node.val)
    if (node.right) traversal(node.right)
  }

};
