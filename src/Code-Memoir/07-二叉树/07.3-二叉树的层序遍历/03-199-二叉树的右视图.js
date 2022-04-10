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
var rightSideView = function(root) {
  if (!root) return []
  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length !== 0) {
    let levelCount = queue.length
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift() // 出队元素
      if (i === levelCount - 1) { // 进行操作元素
        res.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return res
};

// Note: 最右边的节点，是层序遍历 每一层的最后一个节点
