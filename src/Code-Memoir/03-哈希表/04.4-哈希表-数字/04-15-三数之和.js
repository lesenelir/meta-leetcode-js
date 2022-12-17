/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 把三数之和转换为两数之和
  // 先排序，再使用双指针
  let res = [],
    len = nums.length

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i-1]) continue // 去重

    let [left, right] = [i + 1, len - 1]

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        // left right 去重 - 找到一组结果集，将left，right 移动到与之前值的位置
        while (left < right && nums[left + 1] === nums[left]) left++ // 去重
        while (left < right && nums[right - 1] === nums[right]) right-- // 去重
        // 此时left的右边元素值不等于left值，right左边的元素值不等于right值
        left++
        right--
      }
    }
  }

  return res
};
