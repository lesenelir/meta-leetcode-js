/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (s.length === 0) return ' '

  let map = new Map()
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  // 已经存储完map
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key
    }
  }
  // 没有找到
  return ' '
};
