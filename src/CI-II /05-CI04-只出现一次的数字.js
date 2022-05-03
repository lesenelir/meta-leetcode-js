/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()

  for (let item of nums) {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  }

  // 得到了map哈希表， key是元素值 ； value是出现的次数
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key
    }
  }
};
