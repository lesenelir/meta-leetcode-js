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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = []
  preorder(root)
  return res

  function preorder(node) {
    if (node === null) { // 递归终止条件
      return
    }
    res.push(node.val) // 使用闭包的外层函数的参数
    preorder(node.left)
    preorder(node.right)
  }
};


// Note： 二叉树的递归参数：二叉树的头节点的指针 + 数组存放遍历的结果（JS有闭包，可以把数组定义在外部函数）
// 只要在外层函数创建的变量，都可以不用作为参数传递给内层函数
