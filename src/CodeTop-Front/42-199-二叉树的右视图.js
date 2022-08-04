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
  // 右视图，层序遍历
  let queue = [],
      res = [],
      curLevel

  if (root) queue.push(root)

  while (queue.length) {
    curLevel = queue.length
    // 记录每一个节点，对于每一个节点，进行出栈的操作
    for (let i = 0; i < curLevel; i++) {
      let node = queue.shift()
      if (i === curLevel - 1) res.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res

};
