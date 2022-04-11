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
var maxDepth = function(root) {
  let queue = []
  let height = 0
  if (root) queue.push(root)

  while (queue.length) { // while是当前层级，levelCount是该层级有多少个节点
    let levelCount = queue.length
    height++

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return height
};
