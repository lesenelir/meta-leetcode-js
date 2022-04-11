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
  if (!root) return []

  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length !== 0) {
    let curCount = queue.length
    let curLevel = []

    for (let i = 0; i < curCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      // 循环node的children节点
      for (const item of node.children) {
        if (item) {
          queue.push(item)
        }
      }

    }
    res.push(curLevel)
  }
  return res
};
