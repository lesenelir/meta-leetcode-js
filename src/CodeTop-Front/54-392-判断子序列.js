/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // 双指针
  if (s === '') return true

  let [i, j] = [0, 0],
      sLen = s.length,
      tLen = t.length

  while (i < sLen && j < tLen) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === sLen
};
