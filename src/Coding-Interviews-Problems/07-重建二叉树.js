/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null
  if (preorder.length === 1 || inorder.length === 1) return new TreeNode(preorder[0])

  let root = preorder[0]
  // 找到根结点在中序遍历的索引
  let index = inorder.findIndex(i => i === preorder[0])   // findIndex 返回第一个满足条件的元素下标
  // 先序左子树
  let preLeft = preorder.slice(1, index + 1)
  // 先序右子树
  let preRight = preorder.slice(index + 1)  // index + 1 后面的内容
  // 中序左子树
  let inLeft = inorder.slice(0, index)
  // 中序右子树
  let inRight = inorder.slice(index + 1)
  // 构建二叉树
  const node = new TreeNode(root)
  // 递归构建左子树
  node.left = buildTree(preLeft, inLeft)
  // 递归构建右子树
  node.right = buildTree(preRight, inRight)
  return node
};


function f() {
  arr = [1, 2, 3, 4, 5]
  return arr.slice(3)
}

console.log(f())  // [ 4, 5 ]

