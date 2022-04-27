/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      res.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

  }
  return res
};
