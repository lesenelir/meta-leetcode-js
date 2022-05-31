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
var countNodes = function(root) {
  // 思路： 层序遍历找到二叉树中所有节点的个数 【问题：没有用到完全二叉树的性质】
  if (!root) return 0

  let queue = []
  let res = 0
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (node) res++
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
};
