/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let [i, j] = [0, 0]
  let arr = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      arr.push(nums1[i])
      i++
      j++
    }
  }
  return arr
};

// Map方法 key是数字，value是数字出现的次数
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
