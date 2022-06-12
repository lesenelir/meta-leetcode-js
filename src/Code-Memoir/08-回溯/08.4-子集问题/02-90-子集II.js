/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let path = [],
      used = new Array(nums.length).fill(false), // used数组用于去重
      res = []

  nums.sort((a, b) => a - b)
  backTracking(0)
  return res

  function backTracking(startIndex) {
    // 收集结果 - 不在叶子节点收集 就写在最上面
    res.push([...path])
    // 递归终止条件
    if (startIndex > nums.length) {
      return
    }

    // 单层递归逻辑
    for (let i = startIndex; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i-1] && used[i-1] === false) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      backTracking(i + 1)
      used[i] = false
      path.pop()
    }
  }

};
