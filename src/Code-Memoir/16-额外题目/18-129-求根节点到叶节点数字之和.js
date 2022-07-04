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
var sumNumbers = function(root) {
  // 二叉树的回溯算法
  let res = [],
      sum = 0

  traversal(root, [root.val])
  console.log(res)

  res.map(arr => {
    let len = arr.length,
        temp = 0
    for (let i = 0; i < len; i++) {
      temp = temp * 10 + arr[i]
    }
    sum += temp
  })

  return sum

  function traversal(node, path) {
    // 递归终止条件 node节点为叶子节点，则找到一条路径
    if (!node.left && !node.right) {
      res.push([...path])
      return
    }

    // 单层递归逻辑
    // 对于某一个节点而言，尝试把该节点的左右节点放入路径尝试
    if (node.left) {
      path.push(node.left.val)
      traversal(node.left, path)
      path.pop()
    }

    if (node.right) {
      path.push(node.right.val)
      traversal(node.right, path)
      path.pop()
    }
  }

};
