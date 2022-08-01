/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 滑动窗口
  // 滑动窗口找最短：
  //  - R往后滑动 -> 满足条件，移动L缩小窗口 -> 不满足条件，移动R，扩大窗口，直至满足条件
  let [left, right] = [0, 0],
      sum = 0,
      minLen = Number.MAX_VALUE

  while (right < nums.length) {
    sum += nums[right]
    // 满足条件，则缩小窗口
    while (sum >= target) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1
      }
      sum -= nums[left]
      left++
    }

    right++
  }

  return minLen === Number.MAX_VALUE ? 0 : minLen
};
