/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // 贪心：按照绝对值排序，负数直接反转，如果k还是大于0，则反复反转当前数组最小的元素
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a)
  })

  // 遇到负数直接反转
  for (let i = 0; i < nums.length; i++)  {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
  }

  // 如果此时K还大于0，则反复反转当前元素中最小的元素的值，直至k为0（此时没有负数）
  while(k--) {
    nums[nums.length - 1] *= -1
  }

  return nums.reduce((pre, cur)=> {
    return pre + cur
  }, 0)

};
