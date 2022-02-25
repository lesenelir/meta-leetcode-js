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
var isSymmetric = function(root) {
  if (root === null) return true
  return Help(root.left, root.right)

  function Help(left, right) {
    if (left === null && right === null) return true  // 当前为叶子节点返回
    if (left === null || right === null || left.val !== right.val) return false // 其中一个为空（长得不同）或者值不同
    return Help(left.left, right.right) && Help(left.right, right.left)
  }
};


// Note： 左子节点的左子节点和右子节点的右子节点比较；左子节点的右子节点和右子节点的左子节点比较
