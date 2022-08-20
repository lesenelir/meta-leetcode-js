/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // 中序（左根右）后序（左右根）遍历二叉树
  // 以后序的根节点切割中序序列
  // 中序遍历：[左子树的中序遍历, 根节点, 右子树的中序遍历]
  // 后序遍历：[左子树的后序遍历, 右子树的后序遍历, 根节点]
  return buildTreeTraversal(inorder, postorder)

  function buildTreeTraversal(inorder, postorder) {
    // 递归终止条件
    if (postorder.length === 0) {
      return null
    }

    // 单层递归逻辑
    let nodeValue = postorder.pop(), // 最后一个节点
        nodeIndex = inorder.indexOf(nodeValue) // 最后一个节点在中序数组中的下标位置

    let node = new TreeNode(nodeValue)
    node.left = buildTreeTraversal(inorder.slice(0, nodeIndex), postorder.slice(0, nodeIndex)) // 构建左子树：中序左侧，后序左侧
    node.right = buildTreeTraversal(inorder.slice(nodeIndex + 1), postorder.slice(nodeIndex)) // 构建右子树：中序右侧，后序右侧

    return node
  }

};
