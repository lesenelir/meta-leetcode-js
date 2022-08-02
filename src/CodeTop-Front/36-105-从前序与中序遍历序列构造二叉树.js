/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null
  if (preorder.length === 1 || inorder.length === 1) return new TreeNode(preorder[0], null, null)

  let root = preorder[0],
      index = inorder.findIndex(item => item === preorder[0]),
      inLeft = inorder.slice(0, index), // 中序左侧
      inRight = inorder.slice(index + 1), // 中序右侧
      preLeft = preorder.slice(1, index + 1), // 前序左侧
      preRight = preorder.slice(index + 1) // 前序右侧

  // 递归构建二叉树
  let node = new TreeNode(root)
  node.left = buildTree(preLeft, inLeft)
  node.right = buildTree(preRight, inRight)
  return node
};
