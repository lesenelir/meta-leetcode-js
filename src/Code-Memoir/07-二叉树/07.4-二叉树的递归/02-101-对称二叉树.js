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
  if (!root) return true

  let queue = []
  if (root) {
    queue.push(root.left)
    queue.push(root.right)
  }

  while (queue.length) {
    let leftNode = queue.shift()
    let rightNode = queue.shift()
    if (!leftNode && !rightNode) continue // 为空则跳出本次循环，!leftNode意思是，该节点的左右节点指针都为空

    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false
    }

    queue.push(leftNode.left)
    queue.push(rightNode.right)
    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }
  return true
};

// Note: 迭代法处理对称二叉树 ; 注意：此处的迭代法需要加入两个指针进行对比
// 对比：左的左孩子&右的右孩子  ｜   左的右孩子&右的左孩子



// 递归方法
var isSymmetric2 = function(root) {
  // 思路：比较某节点的左右子树 - 左子树的左子树 要和 右子树的右子树 相等
  if (!root) return true
  return compare(root.left, root.right)

  // 比较的是左右子树，而不是左右子孩子，所以参数要存放左右节点，不能只存放一个节点node
  function compare(left, right) {
    // 终止条件
    if (!left && right) return false
    else if (left && !right) return false
    else if (!left && !right) return true
    else if (left.val !== right.val) return false

    // 单层递归逻辑 - 此时为左右子树都存在，且左右子树数值相等情况
    const outside = compare(left.left, right.right)
    const inside = compare(left.right, right.left)
    return outside && inside
  }

};
