/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  let mapS = new Map()
  let mapT = new Map()

  for (const key in s) {
    if (mapS.has(s[key])) {
      mapS.set(s[key], mapS.get(s[key]) + 1)
    } else {
      mapS.set(s[key], 1)
    }
  }

  for (const key in t) {
    if (mapT.has(t[key])) {
      mapT.set(t[key], mapT.get(t[key]) + 1)
    } else {
      mapT.set(t[key], 1)
    }
  }

  if (mapS.size !== mapT.size) {
    return false
  }

  for (const [key, value] of mapS) {
    if (mapT.get(key) !== value) {
      return false
    }
  }

  return true
};
