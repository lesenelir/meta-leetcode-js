/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // 解决重复问题
  let path = [],
      used = new Array(candidates.length).fill(false),
      res = []

  candidates.sort((a, b) => a - b)
  backTracking(0, 0)
  return res

  function backTracking(startIndex, sum) {
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
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
      // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      // 要对同一树层使用过的元素进行跳过
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue;
      }
      path.push(candidates[i])
      used[i] = true
      backTracking(i + 1, sum + candidates[i])
      used[i] = false
      path.pop()
    }
  }

};
