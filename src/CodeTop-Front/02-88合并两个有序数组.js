/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1数组的长度是nums1元素和nums2元素的总和
  // nums1数组永远比nums2长，所以只需要把nums2遍历完即可
  // 原地修改数组
  let i = m - 1,
      j = n - 1,
      k = m + n - 1

  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      k--
      i--
    } else {
      nums1[k] = nums2[j]
      k--
      j--
    }
  }

};

// Note:
//      合并有序数组、链表，都可以构建大小顶堆
