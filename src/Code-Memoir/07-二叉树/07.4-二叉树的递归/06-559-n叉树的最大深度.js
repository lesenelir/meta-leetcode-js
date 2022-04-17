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

  return getDepth(root)

  function getDepth(node) {
    if (!node) return 0
    let depth = 0
    for (let item of node.children) {
      depth = Math.max(depth, maxDepth(item))
    }
    return depth + 1
  }

};
