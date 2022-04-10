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
 */
var levelOrder = function(root) {
  let queue = []
  if (root !== null) queue.push(root)

  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.val) // 执行相关操作
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }

};

// Note： 层序遍历模版：
//    1. 首先如果根节点不为空，则把根节点入队
//    2. 循环队列，出队元素，如果该元素左右节点不为空，存在，即：入队列

