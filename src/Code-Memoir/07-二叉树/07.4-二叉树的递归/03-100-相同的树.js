/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 递归写法
var isSameTree = function(p, q) {
  // 终止条件
 if (!q && !p) { // 都为空不存在时，则true
   return true
 }
 if (!q || !p) { // 有一个为空不存在时，则false
   return false
 }
 if (q.val !== p.val) { // p q 都存在，但是数值不存在时则false
   return false
 }
 return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

