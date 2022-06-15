/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  // 子序列可以是不连续的
  // 思路：统计数组的高峰值和低峰值的个数，中间递增或者递减的顺序数字不统计
  if (nums.length <= 1) return nums.length
  let curDiff = 0,  // 当前差值
      preDiff = 0,  // 前一对差值
      res = 1

  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i+1] - nums[i]
    if ((curDiff > 0 && preDiff <= 0) || (preDiff >= 0 && curDiff < 0)) {
      res++
      preDiff = curDiff
    }

  }
  return res

};
