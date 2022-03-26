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
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null
  if (preorder.length === 1 || inorder.length === 1) return new TreeNode(preorder[0], null, null)

  let root = preorder[0]
  let index = inorder.findIndex(i => i === preorder[0])
  let preLeft = preorder.slice(1, index + 1)
  let preRight = preorder.slice(index + 1)
  let inLeft = inorder.slice(0, index) // 易错：中序遍历的列表不包含中间的index
  let inRight = inorder.slice(index + 1)

  // 构建二叉树
  let node = new TreeNode(root)
  node.left = buildTree(preLeft, inLeft)
  node.right = buildTree(preRight, inRight)
  return node
};
