/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [],
      path = []

  traversal(1)
  return res

  function traversal(startIndex) {
    if (path.length === k) {
      let sum = 0
      for (let i = 0; i < path.length; i++) {
        sum += path[i]
      }
      if (sum === n) {
        res.push([...path])
        return
      }
    }

    for (let i = startIndex; i <= 9; i++) {
      path.push(i)
      traversal(i + 1)
      path.pop()
    }
  }

};




var combinationSum32 = function(k, n) {
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



var combinationSum33 = function(k, n) {
  // 组合是 (2,1) 和 (1,2) 不能一起取得，是属于相同的结果
  // (1,2) 和 (2,1) 是不同的排列
  // 每个数字只能取到一个，往后取
  let res = [],
    path = [],
    sum = 0

  traversal(1)
  return res

  function traversal(startIndex) {
    if (sum > n) return  // 剪枝操作

    if (path.length === k && sum === n) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i <= 9; i++) {
      path.push(i)
      sum += i
      traversal(i + 1)
      sum -= i
      path.pop()
    }
  }

};
