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
  // 返回从根节点到叶子节点之间的路径：回溯
  // 遍历
  let res = [],
      path = []
  traversal(root)
  return res

  function traversal(node) {
    // 递归终止条件
    if (!node) return
    if (!node.left && !node.right) {
      path.push(node.val)
      res.push(path.join('->'))
      path.pop()
      // return // 可有可无
    }

    // 单层递归逻辑
    path.push(node.val)  // 前序位置
    traversal(node.left)
    traversal(node.right)
    path.pop()     // 后序位置
  }

};


var binaryTreePaths2 = function(root) {
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
