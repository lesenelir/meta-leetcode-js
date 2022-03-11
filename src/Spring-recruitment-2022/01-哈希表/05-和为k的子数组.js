/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
  const P = [0]
  for (let i = 0; i < nums.length; i++) {
    P.push(P[i] + nums[i])
  }
  const map = new Map()
  // map的key存储数值，value存储字符出现的次数
  map.set(0, 1)
  let count = 0
  for (let i = 1; i < P.length; i++) {
    if (map.has(P[i] - k)) {// 看看是否存在前缀和为P[i]-k的前缀和
      count += map.get(P[i] - k)
    }
    let c1 = map.has(P[i]) ? map.get(P[i]) : 0
    map.set(P[i], c1 + 1)// 更新前缀和为P[i]的个数
  }
  return count
};

// 前缀和长度比nums长度多1，且第一个值为0
// 子数组： 前缀和 P[i] = nums[0 ~i-1]的和
// 求nums[i ... j]的和，只需要操作 P[j+1] - P[i]
