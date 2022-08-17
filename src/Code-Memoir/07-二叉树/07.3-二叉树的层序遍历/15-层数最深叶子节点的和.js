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
var deepestLeavesSum = function(root) {
  // 层序遍历
  let queue = [],
      res = [],
      levelCount,
      sum

  if (root) queue.push(root)

  while (queue.length) {
    levelCount = queue.length
    sum = 0
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(sum)
  }

  return res[res.length - 1]
};
