/**
 * @param {number[]} nums
 * @return {number}
 */

// 查找数组中是否有重复的元素;
// 用一个map哈希表，键值保存元素的值，哈希表有该元素则返回，没有则加入到哈希表

var findRepeatNumber = function(nums) {
  var map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {  // O(1)复杂度
      return nums[i]
    }
    map.set(nums[i], i)
  }
};


