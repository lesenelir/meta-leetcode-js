/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 梦开始的地方
  // map
  let len = nums.length,
      map = new Map()

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }

};

// Note: 两数之和 暴力关键在于 查找target-nums[i]复杂度，所以该用map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  let map = new Map(),
    len = nums.length

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) return [map.get(nums[i]), i]
    map.set(target - nums[i], i)
  }

};
