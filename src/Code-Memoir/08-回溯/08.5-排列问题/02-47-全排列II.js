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
      // 同一个树层没有遍历递归过，且当前的元素和前一个元素值相等 （需要对原数组进行排序）
      // 当前元素值相等，且当前元素相等的前一个元素值是false，保证不是在同一个树枝上
      if (i > 0 && nums[i] === nums[i-1] && used[i-1] === false) continue
      if (used[i] === true) continue
      path.push(nums[i])
      used[i] = true
      backTracking()
      used[i] = false
      path.pop()
    }
  }

};
