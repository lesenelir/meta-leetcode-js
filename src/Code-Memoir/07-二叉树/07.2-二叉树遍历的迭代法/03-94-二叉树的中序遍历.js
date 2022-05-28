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
var inorderTraversal = function(root) {
  // 中序遍历：左根右
  // 压栈顺序：右根左
  let res = []
  let stack = []
  if (root) stack.push(root)

  while (stack.length) {
    let node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) stack.push(node.right) // 右
    stack.push(node) // 中
    stack.push(null)
    if (node.left) stack.push(node.left) // 左
  }

  return res
};
