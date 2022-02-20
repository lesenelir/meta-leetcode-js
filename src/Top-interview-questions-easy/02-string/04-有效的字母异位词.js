/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 定义两个Hash表 , map键为字符，map值为字符出现次数
  let mapS = getMap(s)
  let mapT = getMap(t)

  if (mapS.size !== mapT.size) {
    return false
  }
  for (const [key, value] of mapS) {
    if (mapT.get(key) !== value) {
      return false
    }
  }
  return true

  // 根据字符串获取 字符串字符数量map的函数
  function getMap(str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], 0)
      } else { // 字符不止一次出现
        map.set(str[i], map.get(str[i]) + 1)
      }
    }
    return map
  }
};

// Note: str 和 Map 之间的运用

