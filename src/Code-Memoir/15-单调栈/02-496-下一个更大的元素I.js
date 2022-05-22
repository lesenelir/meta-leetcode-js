/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 单调栈：下一个更大的元素就是单调栈
  // 没有重复元素可以用map进行处理
  let stack = []
  let map = new Map()
  let res = new Array(nums1.length).fill(-1)

  for (let i = 0; i < nums2.length; i++) {
    const top = stack[stack.length - 1]
    if (nums2[i] <= nums2[top]) {
      stack.push(i)
    } else {
      while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
        let index = stack.pop()
        map.set(nums2[index], nums2[i])
      }
      stack.push(i)
    }
  }

  for (let i = 0; i < res.length; i++) {
    res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1
  }
  return res
};
