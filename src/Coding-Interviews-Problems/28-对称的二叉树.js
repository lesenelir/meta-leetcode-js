/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  return check(root.left, root.right)
};

var check = function (A, B) {
  // 两个都是空树则返回true
  if (!A && !B) return true
  // 有一个是空树则返回false
  if (!A || !B) return false
  // 镜像
  // 结点值相等；A的左子树和B的右子树是镜像 ； A的右子树和B的左子树是镜像
  return (
      A.val === B.val && check(A.left, B.right) && check(A.right, B.left)
  )
}
