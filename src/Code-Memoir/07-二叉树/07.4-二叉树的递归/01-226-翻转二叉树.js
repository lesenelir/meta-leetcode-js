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
  let queue = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) continue

      [node.left, node.right] = [node.right, node.left]

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
};

// Note: 翻转二叉树用层次遍历来处理


// 使用递归方法
var invertTree2 = function(root) {

  return DFS(root)

  // 自定向下递归
  function DFS(root) {
    if (root === null) return root // 递归终止条件
    ;[root.left, root.right] = [root.right, root.left]
    DFS(root.left)
    DFS(root.right)
    return root
  }

};

