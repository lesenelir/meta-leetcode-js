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
var sumOfLeftLeaves = function(root) {
  // 思想：
  // 左叶子定义：某节点的左节点不为空，且该节点的左节点的左右孩子都为空，则该节点的左节点为左叶子节点
  let res = 0
  nodeSum(root)
  return res

  function nodeSum(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层递归逻辑
    let leftValue = nodeSum(node.left)
    let rightValue = nodeSum(node.right)
    if (node.left && !node.left.left && !node.left.right) {
      // node为左叶子节点的父节点 ； node.left 为 左叶子节点
      res += node.left.val
    }
    return res + leftValue + rightValue
  }

};
