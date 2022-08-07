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
  // 此题最好用递归，由于节点有null层序遍历不太能确定
  // 比较某节点的左右子树，左子树的左子树 和 右子树的右子树 要想等

  return compare(root.left, root.right)

  function compare(left, right) {
    // 递归终止条件
    if (left && !right) return false
    else if (!left && right) return false
    else if (!left && !right) return true
    else if (left.val !== right.val) return false

    // 单层递归逻辑
    let outside = compare(left.left, right.right)
    let inside = compare(left.right, right.left)
    return outside && inside
  }

};
