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
  let queue = []
  let height = 0
  if (root) queue.push(root)

  while (queue.length !== 0) {
    let levelCount = queue.length
    height++

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()

      for (const item of node.children) {
        if (item) queue.push(item)
      }

    }

  }
  return height
};
