/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root

  let queue = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    let curLevel = []

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (i !== levelCount - 1) {
        node.next = queue[0]
      } else {
        node.next = null
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
};
