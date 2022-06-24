/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // count 用来表示区间长度
  let res = -Infinity,
      count = 0

  for(let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > res) { // count > 0  且 count > res 更新res
      res = count
    }
    if (count <= 0) count = 0 // 开始重新统计区间长度
  }

  return res
};  
