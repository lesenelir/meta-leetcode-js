/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 2021-12-08
 */

// 暴力题解算法
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
// };

// map题解
var twoSum = function (nums, target) {
  const tempMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const k = target - nums[i]
    if (tempMap.has(k)) {
      return [tempMap.get(k), i]
    }
    tempMap.set(nums[i], i)
  }
};
