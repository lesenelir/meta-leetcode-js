/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return []

  let res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue // 去重复的基准
    for (let j = i + 1; j < nums.length; j++) {
      // 去重
      if (j > i + 1 && nums[j] === nums[j - 1]) continue // 去重复的基准
      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          // 去重 - 先去重 判断指针 再移动指针
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (sum > target) {
          right--
        } else {
          left++
        }
      }
    }
  }
  return res
};
