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
var findBottomLeftValue = function(root) {
  // 思想： 层序遍历最后一层的第一个元素
  let queue = []
  let res = 0
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (i === 0) res = node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
};
