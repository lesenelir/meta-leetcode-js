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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // 思路： 遍历主树的每一个节点的子树查看是否有相同的树

  // 主函数的递归终止条件
  if (!subRoot) return true
  if (!root) return false

  // 主函数单层递归逻辑
  let subLeft = isSubtree(root.left, subRoot)
  let subRight = isSubtree(root.right, subRoot)
  return isSame(root, subRoot) || subLeft || subRight


  // 判断是否为相同的树函数
  function isSame(p, q) {
    // 递归终止条件
    if (!p && !q) return true
    else if (!p && q) return false
    else if (p && !q) return false
    else if (p.val !== q.val) return false

    // 单层递归逻辑 - 此时 p q 子树都存在， 且数值相等，需要递归的判断下面的元素
    let left = isSame(p.left, q.left)
    let right = isSame(p.right, q.right)
    return left && right
  }
};
