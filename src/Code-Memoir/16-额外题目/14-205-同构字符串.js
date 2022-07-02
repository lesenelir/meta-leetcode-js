/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // 两个哈希表分别映射字符
  let len = s.length,
      map1 = new Map(),
      map2 = new Map()

  for (let i = 0; i < len; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], t[i])
    }

    if (!map2.has(t[i])) {
      map2.set(t[i], s[i])
    }

    if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) {
      return false
    }

  }

  return true
};
