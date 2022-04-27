/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    let currentLevel = []
    let count = 0
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      currentLevel.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    // 以及拿到了每一层的currentLevel
    res.push(currentLevel)
  }

  // 对res数组进行操作
  res.map((item, index) => {
    if (index % 2 === 1) {
      item.reverse()
    }
  })

  return res
};
