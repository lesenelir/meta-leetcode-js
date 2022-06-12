/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let path = [],
      res = []

  backTracking(0)
  return res

  function backTracking(startIndex) {
    // 收集结果
    if (path.length >= 2) {
      res.push([...path])
    }
    // 递归终止条件
    if (startIndex > nums.length) {
      return
    }

    // 单层递归逻辑
    let set = new Set()
    for (let i = startIndex; i < nums.length; i++) {
      if (nums[i] < path[path.length - 1] || set.has(nums[i])) continue
      set.add(nums[i])
      path.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }

};
