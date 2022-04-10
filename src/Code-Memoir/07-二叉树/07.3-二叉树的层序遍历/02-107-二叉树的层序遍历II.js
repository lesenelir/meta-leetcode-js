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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return []

  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length !== 0) {
    let levelCount = queue.length
    let curLevel = [] // 当前数组
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(curLevel) // 此处也可以用unshift() 不用进行反转操作
  }
  // 进行反转二维数组的操作
  let [left, right] = [0, res.length - 1]
  while (left < right) { // 相等就跳出循环，所以此处取不到等于号
    [res[left], res[right]] = [res[right], res[left]]
    left++
    right--
  }
  return res
};
