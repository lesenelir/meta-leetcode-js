/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// map key存储数字， value存储下标
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    if (map.has(k)) {
      return [i, map.get(k)]
    }
    map.set(nums[i], i)
  }
};

