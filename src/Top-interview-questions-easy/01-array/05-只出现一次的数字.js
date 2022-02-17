/**
 * @param {number[]} nums
 * @return {number}
 */

// 使用set集合，添加元素，如果添加不进去，就说明有重复，则该元素剔除
var singleNumber = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i]) === true) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }
  return Array.from(set)[0]
};

