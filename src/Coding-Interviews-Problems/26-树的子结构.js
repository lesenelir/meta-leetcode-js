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
  if (A === null || B === null) return false
  // 递归判断当前结点A， A左子树 或者 A右子树 任意一个与B相等，就返回true
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

// 递归函数用来判断A当前结点和B是否相同
const dfs = (A, B) => {
  // 递归出口
  if (!B) return true
  // A 空，B不为空 false
  if (!A) return false
  return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
}
