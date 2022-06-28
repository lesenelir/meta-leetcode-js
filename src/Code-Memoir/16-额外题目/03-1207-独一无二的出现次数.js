/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // 使用map哈希表存储，key为数字，value为出现的次数
  let map = new Map(),
      len = arr.length

  for (let i = 0; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1)
    } else {
      map.set(arr[i], map.get(arr[i]) + 1)
    }
  }
  console.log(map)

  // set查看map
  let set = new Set(map.values())

  return map.size === set.size
};
