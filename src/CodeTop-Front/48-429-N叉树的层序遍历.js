/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // n叉树 层序遍历
  let queue = [],
      res = [],
      levelCount,
      curLevel = []

  if (root) queue.push(root)

  while (queue.length) {
    levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val)

      for (let item of node.children) {
        queue.push(item)
      }
    }
    res.push(curLevel)
  }

  return res
};
