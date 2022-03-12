/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 对向双指针

var threeSum = function (nums) {
  if (nums.length < 3) return []

  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        // 判断左右指针是否相同，去重
        while (nums[left] === nums[left - 1]) left++
        while (nums[right] === nums[right + 1]) right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }

  }
  return result
};
