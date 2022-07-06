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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // 层序遍历模版
  let queue = [],
      res = []

  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    let curLevel = []

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    res.push(curLevel)
  }

  return res
};
