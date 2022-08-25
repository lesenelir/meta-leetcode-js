/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  // 思路： 记录跟节点的深度
  return getDepth(root)

  // 查找每一个节点的深度函数
  function getDepth(node) {
    // 递归终止条件
    if (!node) return 0

    // 单层递归逻辑 - 对于每一个节点而言，该节点深度是该节点孩子节点深度最大值 + 1
    let depth = 0
    for (let item of node.children) {
      depth = Math.max(depth, getDepth(item))
    }
    return depth + 1
  }
};


// 遍历思想来解决最大深度问题
var maxDepth2 = function(root) {
  // 二叉树问题都有两种解决方案：1. 遍历二叉树来解决  2.  将二叉树转换为子树来解决
  let depth = 0, // 当前节点的深度
      maxDepth = 0

  traversal(root)
  return maxDepth

  function traversal(node) {
    if (!node) return 0

    // 单层递归逻辑- 遍历
    depth++ // 前序遍历位置
    // 到叶子节点最远的距离
    if (!node.left && !node.rigth) {
      maxDepth = Math.max(depth, maxDepth)
    }
    for (let item of node.children) {
      traversal(item)
    }
    depth-- // 后序遍历位置
  }

};


