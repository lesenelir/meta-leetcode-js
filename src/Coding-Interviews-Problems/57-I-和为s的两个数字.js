/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // toSum
  let len = nums.length,
      map = new Map()

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [target - nums[i], map.get(target - nums[i])]
    }
    map.set(nums[i], target - nums[i])
  }

};
