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
var postorderTraversal = function(root) {
  let res = []
  postorder(root)
  return res

  function postorder(node) {
    if (node === null) return // 终止条件是遇到了空节点
    postorder(node.left)
    postorder(node.right)
    res.push(node.val)
  }

};

// Note: 参数、终止条件、单层递归逻辑
// 递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后
