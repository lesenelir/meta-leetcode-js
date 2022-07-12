/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [],
      len = nums.length

  if (len < 3) return []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res
    if (nums[i] === nums[i-1]) continue

    let left = i + 1,
        right = len - 1

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        // left 和 right 不为相同的元素
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        // 移动指针
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        // sum < 0
        left++
      }
    }
  }

  return res
};
