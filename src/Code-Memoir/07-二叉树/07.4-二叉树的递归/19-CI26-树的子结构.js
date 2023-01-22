/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false

  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)

  function dfs(A, B) {
    if (!B) return true
    if (!A) return false
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
  }

};