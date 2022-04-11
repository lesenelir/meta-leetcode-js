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
var largestValues = function (root) {
  if (!root) return []

  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length !== 0) {
    let levelCount = queue.length
    let curLevel = []

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    // 此时拿到一轮的curLevel
    let maxNum = curLevel.sort((a, b) => b - a)[0]
    res.push(maxNum)
  }

  return res
};
