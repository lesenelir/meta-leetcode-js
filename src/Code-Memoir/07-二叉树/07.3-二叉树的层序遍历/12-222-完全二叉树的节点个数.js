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
  // 完全二叉树就没有可能是
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


// 递归拆解问题思想解决：
var countNodes2 = function(root) {
  // 递归拆解子问题
  // 需要明白单层递归逻辑中函数最后返回的内容是什么，需要解决什么问题
  return getNodes(root)

  function getNodes(node) {
    // 此处的node是一个节点
    // 函数的意义：返回该节点的节点数
    if (!node) return 0

    let left = getNodes(node.left)
    let right = getNodes(node.right)
    return left + right + 1
  }

};
