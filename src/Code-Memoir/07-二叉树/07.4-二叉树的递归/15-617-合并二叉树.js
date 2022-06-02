/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  // 思路：在同一个函数中遍历两个二叉树
  return traversal(root1, root2)

  function traversal(node1, node2) {
    // 递归终止条件
    if (!node1) {
      // 树1为空，则返回树2
      return node2
    }
    if (!node2) {
      // 树2为空，则返回树1
      return node1
    }

    // 单层递归逻辑
    // - 此时情况：node1 和 node2 都存在
    node1.val += node2.val
    node1.left = traversal(node1.left, node2.left)
    node1.right = traversal(node1.right, node2.right)
    return node1
  }

};
