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
 * @return {number}
 */
var maxDepth = function(root) {
  // 思路： 找根节点的深度
  return getDepth(root)

  // 查找每一个节点的深度函数
  // 将二叉树分解子树来结局问题
  // 该函数定义：传入一个二叉树根节点，返回这个二叉树的最大深度
  function getDepth(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层递归逻辑： 对于一个节点深度而言，找左节点的深度 和 右节点的深度，取最大的值 + 1 作为该节点的最大深度
    // 此处先计算出根节点左子树的深度 ；再计算出右子树的深度， ===> 最后根据左子树的深度和右子树的深度计算出总共的根节点的深度
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    return Math.max(leftDepth, rightDepth) + 1
  }
};

// 遍历方式来解决问题
var maxDepth2 = function(root) {
  // 二叉树的最大深度，有两种思想：一种是遍历整棵树的方式来解决；另一种是分解子问题
  let depth = 0, // depth用来记录当前节点的深度
      maxDepth = 0

  traversal(root)
  return maxDepth

  function traversal(node) {
    if (!node) return

    // 单层递归逻辑
    depth++ // 前序遍历位置
    if (!node.left && !node.right) { // 最大深度只能在叶子节点取得 (这个 if 判断写不写都一样，可能会更高效，但实质是一样的)
      maxDepth = Math.max(depth, maxDepth)
    }
    traversal(node.left)
    traversal(node.right)
    depth-- // 后序遍历位置
  }

};
