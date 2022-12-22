/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // 不可重复且去重；标记数组
  let res = [],
    path = [],
    sum = 0,
    len = candidates.length,
    used = new Array(len).fill(false)

  // 去重操作都要对数组进行排序
  candidates.sort((a, b) => a - b)
  backTracking(0)
  return res

  function backTracking(startIndex) {
    if (sum > target) return
    if (sum === target) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < len; i++) {
      // 同一层两个相同的元素不可以重复选取
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue
      }
      path.push(candidates[i])
      sum += candidates[i]
      used[i] = true
      backTracking(i + 1)
      path.pop()
      sum -= candidates[i]
      used[i] = false
    }
  }

};
