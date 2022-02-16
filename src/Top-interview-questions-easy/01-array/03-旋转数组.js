/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 方法1 添加临时数组
var rotate1 = function (nums, k) {

  k = k % nums.length
  if (k === 0) return nums  // 此时不用旋转

  let result = []

  for (let i = nums.length - k; i < nums.length; i++) {
    result.push(nums[i])
  }
  for (let i = 0; i < nums.length - k; i++) {
    result.push(nums[i])
  }

  return result
};

// console.log(rotate1([1,2,3,4,5,6,7],7))

var rotate = function (nums, k) {

  k = k % (nums.length)

  reverseArray(nums, 0, nums.length - 1)
  reverseArray(nums, 0, k - 1)
  reverseArray(nums, k, nums.length - 1)

  function reverseArray(nums, start, end) { // 关于指定数组下标翻转数组元素函数
    while (start < end) {
      let temp = nums[start]
      // nums[start] = nums[end]
      // start++
      nums[start++] = nums[end]
      nums[end--] = temp
    }
  }
};



