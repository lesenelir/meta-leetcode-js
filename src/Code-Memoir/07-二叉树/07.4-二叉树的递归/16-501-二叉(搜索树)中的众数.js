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
 * @return {number[]}
 */
var findMode = function(root) {
  // 对于是一般二叉树的算法，用map存储node节点的val，值是出现的次数
  let map = new Map(),
      arr = [], // arr可以进行排序，所以把map的每一项存储arr中
      res = []
  traversal(root)
  for (let [key, value] of map.entries()) {
    arr.push({key, value})
  }
  arr.sort((a, b) => b.value - a.value)
  for (let i = 0; i < arr.length; i++) {
    let maxValue = arr[0].value
    if (arr[i].value === maxValue) {
      res.push(arr[i].key)
    }
  }
  return res


  function traversal(node) {
    // 递归终止条件
    if (!node) return

    // 单层递归逻辑
    if (map.has(node.val)) {
      map.set(node.val, map.get(node.val) + 1)
    } else {
      map.set(node.val, 1)
    }
    if (node.left) traversal(node.left)
    if (node.right) traversal(node.right)
  }

};

// Note： 该算法 已经抽象为 二叉树的众数
