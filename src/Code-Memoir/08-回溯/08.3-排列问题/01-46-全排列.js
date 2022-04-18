/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let path = []
  backTracking([])
  return res

  function backTracking(used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (!used[i]) {
        path.push(nums[i])
        used[i] = true // 同支
        backTracking(used)
        path.pop()
        used[i] = false
      }
    }
  }
};

// Note: 同一层节点可以重复使用，所以不用startIndex

