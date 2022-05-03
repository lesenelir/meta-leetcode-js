/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 思路： 对于某一个元素 后 进行双指针操作， 难点： 在于去重复
  let res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue // 去重基准
    let [left, right] = [i + 1, nums.length - 1]

    while (left < right) { // left === right 退出循环
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else { // sum === 0 情况
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++ // 找到相同的元素则移动指针
        while (left < right && nums[right] === nums[right - 1]) right--
        // 找到不同的元素后 两指针后移
        left++
        right--
      }
    }
  }
  return res

};
