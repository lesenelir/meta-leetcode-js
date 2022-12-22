/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 组合 元素可重复
  let res = [],
      path = [],
      sum = 0

  candidates.sort((a, b) => a - b)
  traversal(0)
  return res

  function traversal(startIndex) {
    // 如果sum > target 则结束本地递归函数的执行，返回上一层函数的执行
    if (sum > target) return  // 递归终止条件
    if (sum === target) {
      res.push([...path])
      return
    }

    // 对于当前集合进行递归遍历
    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i]
      path.push(candidates[i])
      // 可重复选择，此处的递归下标还是当前的元素
      traversal(i)
      sum -= candidates[i]
      path.pop()
    }
  }

};


var combinationSum2 = function(candidates, target) {
  let path = [],
      res = []

  candidates.sort((a, b) => a - b)
  backTracking(0, 0)
  return res

  function backTracking(startIndex, sum) { // 一个集合来求组合都要使用startIndex参数
    // 递归终止条件
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...path])
      return
    }

    // 单层递归逻辑
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      backTracking(i, sum + candidates[i]) // 下一层还是从自己这一点开始递归
      path.pop()
    }
  }
};
