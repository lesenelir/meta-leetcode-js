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
  if (root) {
    queue.push(root)
    root.next = null
  }

  while (queue.length !== 0) {
    let levelCount = queue.length

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      if (i !== levelCount - 1) {
        node.next = queue[0]  // 不是为最后一个节点则指向队列的第一个元素是右侧的节点，因为此时该node节点已经出队
      } else {
        node.next = null
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root // 此题是返回的node类型的节点
};



// Note： 此题的关键在于 - 出队的元素的后一个节点，是queue的第一个元素，即 queue[0]

