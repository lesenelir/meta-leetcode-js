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
var minDepth = function(root) {
  let queue = []
  let height = 0
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    height++

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (node.left === null && node.right === null) {
        return height
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

  }
  return height
};
