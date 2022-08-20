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
  // 中序遍历：[左子树的中序遍历, 根节点, 右子树的中序遍历]
  // 前序遍历：[根节点, 左子树的前序遍历, 右子树的前序遍历]

  return myBuildTree(preorder, inorder)

  function myBuildTree(preorder, inorder) {
    // 递归终止条件
    if (preorder.length === 0) {
      return null
    }

    // 单层递归逻辑
    let nodeValue = preorder.shift(),
        nodeIndex = inorder.indexOf(nodeValue)

    let node = new TreeNode(nodeValue)
    node.left = myBuildTree(preorder.slice(0, nodeIndex), inorder.slice(0, nodeIndex)) // 构建左子树 注意此处的slice从0开始，因为已经移除了第一个元素
    node.right = myBuildTree(preorder.slice(nodeIndex), inorder.slice(nodeIndex + 1)) // 构建右子树

    return node
  }

};
