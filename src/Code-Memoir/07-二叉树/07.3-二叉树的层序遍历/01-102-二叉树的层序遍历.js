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
  if (root === []) return []

  let queue = []
  let res = []
  if (root !== null) queue.push(root)

  while (queue.length !== 0) {
    // 记录当前层级保存的节点数
    let levelCount = queue.length
    // 存放每一层的节点
    let curLevel = []
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val) // 把当前节点的值存入临时数组
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(curLevel)
  }
  return res
};

// Note：二叉树的层序遍历需要用到队列 - 当出队列某个元素，如果该元素的左右节点不为空，则入队列
