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
var findBottomLeftValue = function(root) {
  // 二叉树的递归遍历
  // 最左边的节点：到达最大深度时，第一次遇到的节点就是该二叉树的最大节点（最左侧：第一次到达深度最深的节点）
  let depth = 0, // 当前节点的递归深度
      maxDepth = 0,
      res = null

  traversal(root)
  return res.val

  function traversal(node) {
    if (!node) return

    depth++ // 前序位置，进入节点
    if (depth > maxDepth) {
      maxDepth = depth
      res = node
    }
    traversal(node.left)
    traversal(node.right)
    depth-- // 后序位置，离开节点
  }

};


// 层序遍历
var findBottomLeftValue2 = function(root) {
  // 层序遍历最后一层的第一个节点
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

  return res[res.length - 1][0]
};



var findBottomLeftValue3 = function(root) {
  // 思想： 递归确定最后一行 和 第一个元素
  // 确定二叉树的最后一行可以通过二叉树深度最大确定
  let maxDepth = 0
  let maxValue = 0
  dfsTree(root, 1)
  return maxValue

  function dfsTree(node, curDepth) {
    // 递归终止条件
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth
        maxValue = node.val
      }
      return
    }

    // 单层递归逻辑
    if (node.left) dfsTree(node.left, curDepth + 1)
    if (node.right) dfsTree(node.right, curDepth + 1)
    return
  }

};
