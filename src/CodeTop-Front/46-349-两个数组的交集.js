/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // 求数组的交集、并集、差集都可以用 set 这个数据结构来实现
  let res = [],
      setA = new Set(nums1),
      setB = new Set(nums2)

  for (let item of setA) {
    if (setB.has(item)) {
      res.push(item)
    }
  }

  return res
};
