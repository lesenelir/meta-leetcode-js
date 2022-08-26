/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // 组合回溯
  let res = [],
      path = []

  traversal(1)
  return res

  function traversal(startIndex) { // startIndex 用来控制树枝的生长
    if (path.length === k) {
      res.push([...path])
      return
    }

    // 回溯递归
    for (let i = startIndex; i <= n; i++) {
      // 进入节点的前序位置
      path.push(i)
      traversal(i + 1)
      // 离开节点的后序位置
      path.pop()
    }
  }

};


var combine2 = function (n, k) {
  // 组合问题是处理叶子节点 所有递归终止条件必须写
  let res = []
  let path = []
  backTacking(1)
  return res

  // 一个集合求组合的话 则需要startIndex
  function backTacking(startIndex) {
    // 终止条件 - 处理叶子节点
    if (path.length === k) {
      res.push([...path]) // 不能直接push path数组，是引用
      return
    }
    // 单层搜索过程
    for (let i = startIndex; i <= n; i++) { // 控制树的横向遍历
      // 处理节点
      path.push(i)
      // 递归
      backTacking(i + 1) // 控制树的纵向遍历
      // 回溯，撤销结果
      path.pop()
    }
  }

};

console.log(combine(4, 2))

// Note： 对于js而言，父级元素中的变量可以不做当前的递归函数的参数
