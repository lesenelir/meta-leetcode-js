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
    for (let i = startIndex; i <= n; i++) {
      // 处理节点
      path.push(i)                 // 分别对应： 取1 之后进行递归 - 取2 之后进行递归 - 取3 之后进行递归
      // 递归
      backTacking(i + 1)
      // 回溯，撤销结果
      path.pop()
    }
  }

};

console.log(combine(4, 2))
