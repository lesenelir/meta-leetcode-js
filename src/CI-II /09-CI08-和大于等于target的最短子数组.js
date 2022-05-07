/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 滑动窗口思路： 寻找最短： right不断往右移，直至满足后，left往右移缩小窗口大小 ， 不满足后 right移
  let [left, right] = [0, 0]
  let sum = 0
  let res = Number.MAX_VALUE

  while (right < nums.length) {
    sum += nums[right]
    // 一直相加 遇到sum > target 不满足情况后 开始移动left指针
    while (sum >= target) {
      if (right - left + 1 < res) {
        res = right - left + 1
      }
      sum -= nums[left]
      left++
    }
    right++
  }

  return res === Number.MAX_VALUE ? 0 : res
};
