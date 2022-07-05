/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // map key是元素值，value是数组下标
  let len = nums.length,
      res = [],
      map = new Map(),
      item

  for (let i = 0; i < len; i++) {
    item = target - nums[i] // 比较差值是否出现过
    if (map.has(item)) {
      res = [map.get(item), i]
    }
    map.set(nums[i], i)
  }

  return res
};
