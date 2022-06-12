/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // 去重操作，类似于组合的去重
  let path = [],
      used = new Array(nums.length).fill(false),
      res = []

  nums.sort((a, b) => a - b)
  backTracking()
  return res

  function backTracking() {
    // 递归终止条件
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    // 单层递归逻辑
    for (let i = 0; i < nums.length; i++) {
      if (!used[i-1] && nums[i] === nums[i-1]) continue
      if (!used[i]) {
        path.push(nums[i])
        used[i] = true
        backTracking()
        used[i] = false
        path.pop()
      }
    }
  }

};
