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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  // 层序遍历
  if (depth === 1) {
    let newTree = new TreeNode(val)
    newTree.left = root
    return newTree
  }

  let queue = [],
      count = 1, // 记录深度，
      levelCount

  if (root) queue.push(root)

  while (queue.length) {
    levelCount = queue.length

    if (count === depth - 1) { // 当前深度为depth - 1，则需要创建节点，插入
      for (let i = 0; i < levelCount; i++) {
        let node = queue.shift(),
            tempLeft = new TreeNode(val, node.left, null),
            tempRight = new TreeNode(val, null, node.right)

        node.left = tempLeft
        node.right = tempRight
      }
    } else { // 当前深度不为depth - 1，则常规遍历输出
      for (let i = 0; i < levelCount; i++) {
        let node = queue.shift()
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    count++
  }

  return root
};
