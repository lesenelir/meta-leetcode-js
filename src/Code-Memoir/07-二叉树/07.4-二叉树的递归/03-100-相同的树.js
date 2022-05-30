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

// 递归 - 思路清晰版本
var isSameTree = function(p, q) {
  // 思路：类似于对成二叉树 - 判断两个二叉树的左右子树位置是否相等
  return compare(p, q)

  function compare(p, q) {
    // 递归终止条件
    if (!p && !q) return true
    else if (!p && q) return false
    else if (p && !q) return false
    else if (p.val !== q.val) return false

    // 单层递归逻辑： 此时满足 p子树和q子树都存在，且数值相等 - 处理该逻辑
    let left = compare(p.left, q.left)
    let right = compare(p.right, q.right)
    return left && right
  }
};


// 递归写法 简单写法
var isSameTree2 = function(p, q) {
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

