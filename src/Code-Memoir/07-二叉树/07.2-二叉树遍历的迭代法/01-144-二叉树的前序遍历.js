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
  // 前序遍历：根左右
  // 压栈顺序：右左根
  let stack = []
  let res = []
  if (root) stack.push(root)
  while (stack.length) {
    let node = stack.pop() // 此时node为弹出的节点
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) stack.push(node.right) // 右
    if (node.left) stack.push(node.left) // 左
    stack.push(node) // 中
    stack.push(null)
  }
  return res
}; 
