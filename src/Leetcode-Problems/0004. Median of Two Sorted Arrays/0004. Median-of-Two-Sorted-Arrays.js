/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 方法一、进行归并的思想进行解决 中位数，但是时间复杂度为O(n)
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length
  // 归并比较
  if (len % 2 === 0) {
    resultNum = (getNum(nums1, nums2, len / 2 - 1) + getNum(nums1, nums2, len / 2)) / 2
  } else {
    resultNum = getNum(nums1, nums2, len / 2)
  }
  return resultNum
};

const getNum = function (nums1, nums2, k) {   // 归并算法
  let result = []
  result.length = nums1.length + nums2.length
  let p1 = 0  // 指向数组1的指针
  let p2 = 0  // 指向数组2的指针
  let i = 0   // 指向新数组的指针
  while (p1 < nums1.length && p2 < nums2.length && i <= k) {  // 两个数组都有元素进行对比归并
    if (nums1[p1] <= nums2[p2]) {
      result[i++] = nums1[p1++]
    } else {
      result[i++] = nums2[p2++]
    }
  }
  // 把剩余数组直接插入新数组后面
  while (p1 < nums1.length && i <= k) {  // 数组1还没有归并完，数组2已经归并完
    result[i++] = nums1[p1++]
  }
  while (p2 < nums2.length && i <= k) {  // 数组2还没有归并完，数组1已经归并完
    result[i++] = nums2[p2++]
  }
  return result[i - 1]   // i代表长度，数组元素从0开始，所以是k的前一个元素
}
