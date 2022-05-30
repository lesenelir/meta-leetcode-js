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
