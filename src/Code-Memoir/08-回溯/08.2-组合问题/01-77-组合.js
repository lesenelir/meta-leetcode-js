/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

  let res = []
  let path = []
  backTacking(1)
  return res

  function backTacking(startIndex) {
    // 终止条件
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
