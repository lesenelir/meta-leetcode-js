/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // 全排列是强调顺序，[1, 2]和[2, 1]是两个排序，所以需要一个used数组
  let path = [],
      used = new Array(nums.length).fill(false)
  res = []

  backTracking()
  return res

  function backTracking() { // 排列问题每层都是从0开始搜索,所以不用startIndex
    // 递归终止条件
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    // 单层递归逻辑
    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true) continue
      path.push(nums[i])
      used[i] = true
      backTracking()
      used[i] = false
      path.pop()
    }
  }

};
