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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 思路：把每个节点的左右孩子都进行翻转，就可以达到整体反转效果
  let queue = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) continue // 该节点左右都为空则继续
      // 更换该节点的左右节点值
      [node.left, node.right] = [node.right, node.left]

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
};

// Note: 翻转二叉树用层次遍历来处理

// 递归方法有两个解题思路
var invertTree = function(root) {
  // 求解二叉树递归问题：1. 能否通过二叉树遍历来完成 2. 能否通过分解子问题来推导原问题来解决
  // 本题通过遍历的方式来解决，遍历到每一个节点，翻转两个节点的值
  traversal(root)
  return root

  function traversal(node) {
    if (!node) return

    // 单层递归逻辑
    // 在前序位置：对于该元素节点交换该元素节点的左右孩子
    ;[node.left, node.right] = [node.right, node.left]
    traversal(node.left)
    traversal(node.right)
  }

};

// Note: 遍历函数用traversal；需要通过分解子问题的，可以用
