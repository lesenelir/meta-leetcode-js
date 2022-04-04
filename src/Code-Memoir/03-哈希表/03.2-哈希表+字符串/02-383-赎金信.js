/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = new Map()

  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1)
    } else {
      map.set(magazine[i] , 1)
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      let count = map.get(ransomNote[i])
      map.set(ransomNote[i], --count)
      if (map.get(ransomNote[i]) < 0) { // 存在元素，且没有使用次数机会则返回false
        return false
      }
    }
    if (!map.has(ransomNote[i])) {
      return false
    }
  }
  return true
};

