/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  // 按规则排序
  let len = nums.length,
      odd = [],
      even = [],
      indexOdd = 1,
      indexEvent = 0,
      res = []

  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 !== 0) {
      odd.push(nums[i])
    } else {
      even.push(nums[i])
    }
  }

  // 遍历偶数数组
  for (let i = 0; i < even.length; i++) {
    res[indexEvent] = even[i]
    indexEvent += 2
  }

  // 遍历奇数数组
  for (let i = 0; i < odd.length; i++) {
    res[indexOdd] = odd[i]
    indexOdd += 2
  }

  return res
};
