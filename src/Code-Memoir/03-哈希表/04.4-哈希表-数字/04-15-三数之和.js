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
    if (nums[i] === nums[i-1]) continue

    let [left, right] = [i + 1, len - 1]
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        // sum === 0
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      }
    }
  }

  return res
};
