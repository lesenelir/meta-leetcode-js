/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1) return 1

  let peakNum = 0
  let flag = false
  let start
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      start = i
      break
    }
  }

  // 高峰值点
  if (nums[start] > nums[start - 1]) {
    for (let i = start; i < nums.length - 1; i++) {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        peakNum++
      }
      // 考虑最后一个值是不是高峰值
      if (nums[nums.length - 1] > nums[nums.length - 2]) {
        flag = true
      }
    }
  }

  // 低峰值点
  if (nums[start] < nums[start - 1]) {
    for (let i = start; i < nums.length - 1; i++) {
      if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
        peakNum++
      }
      // 考虑最后一个值是不是高峰值
      if (nums[nums.length - 1] < nums[nums.length - 2]) {
        flag = true
      }
    }
  }


  if (!flag) {
    return 2 * peakNum + 1
  } else {
    return 2 * peakNum + 2
  }

};

// Note： 找峰值位置
// 1 - 3
// 2 - 5
// 3 - 7
// 4 - 9
// 5 - 11
// n - 2n+1

