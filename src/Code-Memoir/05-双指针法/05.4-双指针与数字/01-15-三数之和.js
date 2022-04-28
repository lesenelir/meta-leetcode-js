/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []

  nums.sort((a, b) => a - b)
  let res = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res  // 当前元素大于0 肯定不可能和为0

    if (i > 0 && nums[i] === nums[i - 1]) continue // 去重  -  防止基点重复出现

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        // 先进行 去重操作 找到符合的left 和 right 再移动这两个指针
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res

};
