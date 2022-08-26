/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 回溯
  let res = [],
      path = [],
      sum = 0

  candidates.sort((a, b) => a - b)
  traversal(0)
  return res

  function traversal(startIndex) {
    if (sum > target) return  // 递归终止条件
    if (sum === target) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i]
      path.push(candidates[i])
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
