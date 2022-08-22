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
 * @return {string[][]}
 */
var printTree = function(root) {
  let height = getTreeDepth(root) - 1, // height从0开始计数，所以要减0
      m = height + 1,
      n = Math.pow(2, height + 1) - 1,
      arr = new Array(m).fill('').map(() => new Array(n).fill(''))

  Fillling(root, 0, (n - 1) / 2)
  return arr

  // 计算树的高度
  function getTreeDepth(node) {
    // 递归终止条件
    if (!node) return 0
    // 单层递归逻辑
    let leftDepth = getTreeDepth(node.left)
    let rightDepth = getTreeDepth(node.right)
    return Math.max(leftDepth, rightDepth) + 1
  }

  // 填充arr数组元素
  function Fillling(node, x, y) {
    if (!node) return

    // 单层递归逻辑
    arr[x][y] = String(node.val)
    Fillling(node.left, x + 1, y - (1 << (height - x - 1)))
    Fillling(node.right, x + 1, y + (1 << (height - x - 1)))
  }


};
