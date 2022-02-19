/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    if (map.has(k)) { // 有键值
      return [i, map.get(k)]
    }
    map.set(nums[i], i)  // 放在后面再向哈希表添加数据，防止[3,2,4] 6 , 这种情况出现[0,0] 自己和自己匹配
  }
};
