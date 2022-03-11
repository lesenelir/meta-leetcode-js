/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var subarraysDivByK = function(nums, k) {
  const P = [0]
  for (let i = 0; i < nums.length; i++) {
    P.push(P[i] + nums[i])
  }
  console.log(P)
  const map = new Map()
  map.set(0, 1)
  let count = 0
  for (let i = 1; i < P.length; i++) {
    let mod = ((P[i] % k) + k) % k
    if (map.has(mod)) {
      count += map.get(mod)
    }
    let c = map.has(mod) ? map.get(mod) : 0
    map.set(mod, c + 1)
  }
  return count
};


// Note：涉及连续子数组问题的时候，使用前缀和来解决
// 前缀和的第一个值为零，后面的数字为前面数字的和
