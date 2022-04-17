/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = []
  let path = []
  backTracking(1, 0)
  return res

  function backTracking(startIndex, sum) {
    // 递归终止条件
    if (sum === n && path.length === k) {
      res.push([...path])
      return
    }

    // 单层搜索过程
    for (let i = startIndex; i <= 9; i++) { // 从1 到 9 搜索
      // 处理节点
      path.push(i)
      // 递归
      backTracking(i + 1, sum + i)
      // 回溯
      path.pop()
    }
  }

};
