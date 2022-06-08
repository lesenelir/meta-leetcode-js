/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  // 组合问题是无序的 - 1 ~ 9 选k个使得和为n
  let res = [],
      path = []
  backTracking(1, 0)
  return res

  function backTracking(startIndex, sum) {
    // 剪枝操作
    if (sum > n) {
      return
    }

    // 递归终止条件
    if (path.length === k) {
      if (sum === n) res.push([...path])
      return // 返回是回溯
    }

    // 单层递归逻辑
    for (let i = startIndex; i <= 9; i++) { // 从1 到 9 开始搜索
      path.push(i)
      backTracking(i + 1, sum + i)
      path.pop()
    }
  }

};
