/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归处理问题
var mirrorTree = function(root) {
  if (!root) return null
  // 交换当前结点的额左右子数
  let temp = root.left
  root.left = root.right
  root.right = temp
  // 递归交换左子树的左右结点
  mirrorTree(root.left)
  // 递归交换右子树的左右结点
  mirrorTree(root.right)
  return root
};

// 方法二、对于二叉树创建有些可以用创建新结点的方法来处理
var mirrorTree2 = function (root) {
  if (!root) return null
  let newTreeNode = new TreeNode(root.val)
  newTreeNode.right = mirrorTree2(root.left)
  newTreeNode.left = mirrorTree2(root.right)
  return newTreeNode
}
