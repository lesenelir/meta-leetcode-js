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
var postorderTraversal = function(root) {
  // 后序遍历：左右根
  // 压栈顺序：根右左
  let res = []
  let stack = []
  if (root) stack.push(root)

  while (stack.length) {
    let node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    stack.push(node)
    stack.push(null)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
};
