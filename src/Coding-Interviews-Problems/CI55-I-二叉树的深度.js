/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let queue = []
  let depth = 0
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    depth++

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

  }
  return depth
};
