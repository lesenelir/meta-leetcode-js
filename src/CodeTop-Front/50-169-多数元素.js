/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 摩尔投票 O(n) | O(1)
  let len = nums.length,
      k = Math.floor(len / 2)
  map = new Map()

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i] , 1)
    }
  }

  for (let [key, value] of map.entries()) {
    if (value > k) {
      return key
    }
  }

};
