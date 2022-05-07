/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 前缀和思想
  // P 第一个数为0，其余的后面开始相加
  // nums = [1, 2, 3]
  // P = [0, 1, 3, 6]
  // P[i+1] = P[i] + nums[i]
  // 区间[i,j]的和 为 P[j+1] - p[i]

  let P = new Array(nums.length + 1)
  P[0] = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    P[i+1] = P[i] + nums[i]
  }
  console.log(P)
  // map key存储数值， value存储字符出现的次数
  let map = new Map()
  map.set(0, 1) // 设置前缀和的初始值P[0] = 0
  for (let i = 1; i < P.length; i++) {
    if (map.has(P[i]- k)) {
      count += map.get(P[i] - k)
    }
    // 更新前缀和P[i]的个数
    if (map.has(P[i])) {
      map.set(P[i], map.get(P[i]) + 1)
    } else {
      map.set(P[i], 1)
    }
  }

  return count


  // 暴力枚举  [i, j] 中查找满足条件则计数
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = 0
  //   for (let j = i; j >= 0; j--) {
  //     sum += nums[j]
  //     if (sum === k) {
  //       count++
  //     }
  //   }
  // }
  // return count
};

// Note: 此题目是关于前缀和的问题 P[i] = nums[0] + ... + nums[i-1]
// P[j+1] - P[i] = 区间[i,j]之间的nums数值相加的和
