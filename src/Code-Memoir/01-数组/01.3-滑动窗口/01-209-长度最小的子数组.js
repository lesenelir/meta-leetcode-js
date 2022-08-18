/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 连续和最小子数组
// 暴力算法
var minSubArrayLen = function (target, nums) {
  let res = Number.MAX_VALUE
  let sum = 0
  let subLength = 0
  for (let i = 0; i < nums.length; i++) { // 子序列开始节点
    sum = 0
    for (let j = i; j < nums.length; j++) { // 子序列终止节点
      sum += nums[j]
      if (sum >= target) {
        subLength = j - i + 1
        res = res < subLength ? res : subLength
        break
      }
    }
  }
  // 如果res没有被赋值，则不存在子数组
  return res === Number.MAX_VALUE ? 0 : res
};


// 滑动窗口
// 窗口是长度最小的子序列数组
// 窗口的起始位置是数组起始位置；窗口结束为止是数组的结束位置
var minSubArrayLen2 = function (target, nums) {
  let res = Number.MAX_VALUE
  let i = 0 // 起始位置
  let subLength = 0
  let sum = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      subLength = j - i + 1
      res = res < subLength ? res : subLength
      sum -= nums[i++] // 不断调整窗口起始位置大小（缩小）
    }
  }
  return res === Number.MAX_VALUE ? 0: res
};


// 模版写法
var minSubArrayLen3 = function (target, nums) {
  let [left, right] = [0, 0]
  let sum = 0
  let minLength = 0
  while (right < nums.length) {
    sum += nums[right]
    while (sum >= target) {
      if (right - left + 1 < minLength || minLength === 0) {
        minLength = right - left + 1
      }
      sum -= nums[left] // 移除left对应元素，并且窗口缩小
      left++
    }
    right++ // 不满足条件右指针右移，扩大窗口
  }
  return minLength
};


var minSubArrayLen4 = function(target, nums) {
  // 滑动窗口
  // 滑动窗口找最短：
  //  - R往后滑动 -> 满足条件，移动L缩小窗口 -> 不满足条件，移动R，扩大窗口，直至满足条件
  let [left, right] = [0, 0],
      sum = 0,
      minLen = Number.MAX_VALUE

  while (right < nums.length) {
    sum += nums[right]
    // 满足条件，则缩小窗口
    while (sum >= target) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1
      }
      sum -= nums[left]
      left++
    }

    right++
  }

  return minLen === Number.MAX_VALUE ? 0 : minLen
};


// Note: 区别于前缀和：前缀和是之前的所有元素；滑动窗口是之前的一个序列的元素
//       对于暴力算法处理序列，可以有两个数组，外层数组为左边界，内存循环为右边界
//       滑动窗口的精髓：根据子序列和的大小情况，不断调节子序列的起始位置
