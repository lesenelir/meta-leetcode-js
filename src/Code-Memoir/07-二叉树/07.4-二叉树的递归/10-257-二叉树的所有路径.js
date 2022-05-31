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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = []
  getPath(root, '')
  return res

  function getPath(node, curPath) {
    // 递归终止条件：遇到了叶子节点
    if (!node.left && !node.right) {
      curPath += node.val
      res.push(curPath)
      return
    }

    // 单层递归逻辑
    curPath += node.val + '->' // 对于每一条路径中的元素
    if (node.left) getPath(node.left, curPath) // 隐藏了回溯
    if (node.right) getPath(node.right, curPath)
  }

};
