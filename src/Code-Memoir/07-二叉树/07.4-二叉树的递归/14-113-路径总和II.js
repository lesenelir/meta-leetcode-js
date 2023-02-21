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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  // 二叉树的遍历算法，保存节点
  let res = [],
      path = [],
      sum = 0

  traversal(root)
  return res

  function traversal(node) {
    if (!node) return

    if (!node.left && !node.right) {
      sum += node.val
      path.push(node.val)
      if (targetSum === sum) {
        res.push([...path])
      }
      sum -= node.val
      path.pop()
    }
    sum += node.val // 前序位置
    path.push(node.val)
    traversal(node.left)
    traversal(node.right)
    sum -= node.val // 后序位置
    path.pop()
  }

};

var pathSum2 = function(root, targetSum) {
  // 收集路径
  let path = [],
      res = [],
      sum = 0

  traversal(root)
  return res

  function traversal(node) {
    if (!node) return

    sum += node.val
    path.push(node.val)
    if (!node.left && !node.right && sum === targetSum) {
      res.push([...path])
    }
    traversal(node.left)
    traversal(node.right)
    sum -= node.val
    path.pop()
  }

};




var pathSum3 = function(root, targetSum) {
  // 思路：遍历递归每一条路径targetSum - 每个节点的val 为 0，则放入数组中
  // 要遍历整棵树所有的路径，所以递归函数不需要有返回值
  if (!root) return []
  let res = []
  traversal(root, targetSum - root.val, [root.val])
  return res

  function traversal(node, count, path) {
    // 递归终止条件
    if (!node.left && !node.right && count === 0) {
      // 找到了一条路径
      res.push([...path])
      return
    }
    if (!node.left && !node.right) return

    // 单层递归逻辑
    // 对于某一个节点而言，尝试把该节点的左右节点放入路径尝试
    if (node.left) {
      path.push(node.left.val)
      traversal(node.left, count - node.left.val, path) // 递归
      path.pop() // 回溯 - 因为递归函数中path没有变化，所有要回溯
    }
    if (node.right) {
      path.push(node.right.val)
      traversal(node.right, count - node.right.val, path) // 递归
      path.pop() // 回溯
    }
    return
  }

};


var pathSum4 = function(root, targetSum) {
  // 遍历思想
  let res = [],
    path = [],
    sum = 0

  traversal(root)
  return res

  function traversal(node) {
    if (!node) return

    path.push(node.val)
    sum += node.val
    // 进入节点的操作
    if (!node.left && !node.right && sum === targetSum) {
      res.push([...path])
      sum -= node.val
      path.pop()
      return
    }
    traversal(node.left)
    traversal(node.right)
    path.pop()
    sum -= node.val
  }

};
