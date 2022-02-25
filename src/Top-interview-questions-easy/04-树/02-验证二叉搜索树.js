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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root === null) return true
  let arr = []
  fromOrderGetArr(root)
  console.log(arr)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    }
  }
  return true

  function fromOrderGetArr(root) {  // 中序遍历
    if (root) { // 左根右
      fromOrderGetArr(root.left)
      arr.push(root.val)
      fromOrderGetArr(root.right)
    }
  }
};

// Note: 1. 二叉搜索树的中序列的各个元素是递增的
//       2. 自顶向下方法：root的节点值是左子树的最大值，是右子树的最小值
