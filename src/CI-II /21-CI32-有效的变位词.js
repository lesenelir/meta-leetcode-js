/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s == t) return false // s 与 t 内容相等则返回false

  let mapS = new Map()
  let mapT = new Map()

  for (let item of s) {
    if (mapS.has(item)) {
      mapS.set(item, mapS.get(item) + 1)
    } else {
      mapS.set(item, 1)
    }
  }
  // console.log(mapS)

  for (let item of t) {
    if (mapT.has(item)) {
      mapT.set(item, mapT.get(item) + 1)
    } else {
      mapT.set(item, 1)
    }
  }
  // console.log(mapT)

  if (mapS.size !== mapT.size) {
    return false
  }

  for (let [key, value] of mapS.entries()) {
    if (mapT.get(key) !== value) {
      return false
    }
  }

  return true

  // Note： 判断两个字符串字符数量是否相等，可以用两个map进行存储并一一对比
};
