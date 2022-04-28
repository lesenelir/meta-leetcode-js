/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let map = new Map()

  // key 是 a+b 的值， value是出现的次数
  for (let item1 of nums1) {
    for (let item2 of nums2) {
      let sum = item1 + item2
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1)
      } else {
        map.set(sum, 1)
      }
    }
  }

  let count = 0
  // 遍历nums3 和 nums4 数组去数组中查询数字
  for (let item3 of nums3) {
    for (let item4 of nums4) {
      let temp = 0 - (item3 + item4)
      if (map.has(temp)) {
        count += map.get(temp)
      }
    }
  }
  return count
};
