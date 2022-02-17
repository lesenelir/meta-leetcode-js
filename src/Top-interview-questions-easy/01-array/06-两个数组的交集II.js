/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 *  选取中间重复的元素
 *
 */


// 方法1： 使用双指针方法
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let arr = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {  // 小值j后移
      j++
    } else if (nums1[i] < nums2[j]) { // 小值i后移
      i++
    } else { // 相等情况
      arr.push(nums1[i])
      i++
      j++
    }
  }
  return arr
};


// 方法2： map类型，键保存元素值，值保存出现的次数
// Note：下标保存值，不能用数组，因为可能值特别大，数组开的过大
var intersect2 = function (nums1, nums2) {
  let map = new Map()
  let arr = []
  for (const number of nums1) {
    if (map[number]) { // 有值
      map[number]++
    } else {
      map[number] = 1
    }
  }
  for (const number of nums2) {
    let count = map[number] // 记录出现的次数
    if (count > 0) {
      arr.push(number)
      map[number]--
    }
  }
  return arr
};

