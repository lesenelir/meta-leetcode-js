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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  // 思路：二叉搜索树的插入操作都是针对叶子节点而言的，进行搜索找到空节点并进行放置即可
  return traversal(root, val)

  function traversal(node, val) {
    // 递归终止条件
    if (!node) {
      let newNode = new TreeNode(val)
      return newNode
    }

    // 单层递归逻辑
    // - 此时的情况为：node节点存在
    if (val < node.val) node.left = traversal(node.left, val)
    if (val > node.val) node.right = traversal(node.right, val)
    return node
  }

};
