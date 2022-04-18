/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let result = []
  let path = []
  backTracking([])
  return result

  function backTracking(used) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backTracking(used)
        path.pop()
        used[i] = false
      }
    }
  }

};
