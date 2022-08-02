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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 迭代算法
  if (!root) return []

  let stack = [],
      res = []
  stack.push(root)

  while (stack.length) {
    let node = stack.pop() // 此处和层序遍历是不同的，栈是弹出最后一个元素pop，队列弹出第一个元素shift

    res.push(node.val)
    // 前序遍历迭代算法，先存入右节点
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }

  return res
};


var preorderTraversal2 = function(root) {
  // 递归
  let res = []
  traversal(root)
  return res

  function traversal(node) {
    // 递归终止条件
    if (!node) return

    // 单层递归逻辑
    res.push(node.val)
    traversal(node.left)
    traversal(node.right)
  }

};
