/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针
var trap = function(height) {

};

// 暴力算法
var trap2 = function(height) {
  let res = 0

  for (let i = 1; i < height.length - 1; i++) { // 对于每一列，最左右两列不保存
    // 找当前列的左边最大值
    let leftMax = 0
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j])
    }

    // 找当前列的右边最大值
    let rightMax = 0
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j])
    }

    res += Math.min(rightMax, leftMax) - height[i]
  }
  return res
};

// 题目算法： 对于当前列而言：左右最大值中最小的减去当前高度是能盛的水量


// Note： 本题可以用暴力、双指针、单调栈
