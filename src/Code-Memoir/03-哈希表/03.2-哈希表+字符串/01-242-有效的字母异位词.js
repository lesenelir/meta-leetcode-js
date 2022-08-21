/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // map 存储字符出现的次数
  let mapS = getStrMap(s),
      mapT = getStrMap(t)

  if (mapS.size !== mapT.size) return false // 提前判断map中有多少个键值对

  for (let [key, value] of mapS.entries()) {
    if (mapT.get(key) !== value) {
      return false
    }
  }

  return true

  function getStrMap(str) {
    let len = str.length,
        map = new Map()

    for (let i = 0; i < len; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], 1)
      } else {
        map.set(str[i], map.get(str[i]) + 1)
      }
    }

    return map
  }
};
