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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  // 思路： 递归找根子树
  return findSubTree(root, val)

  function findSubTree(node, val) {
    // 递归终止条件
    if (!node || node.val === val) {
      return node
    }

    // 单层递归逻辑
    // 此时node节点存在
    // 当递归函数需要返回一条边的时候，则需要加return字符
    if (node.val > val) {
      return findSubTree(node.left, val)
    }
    if (node.val < val) {
      return findSubTree(node.right,val)
    }

  }

};
