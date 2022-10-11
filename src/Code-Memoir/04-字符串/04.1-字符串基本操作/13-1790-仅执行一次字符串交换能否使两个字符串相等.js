/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  // 模拟比较两个字符串的不同字符出现的次数
  // 同一个字符串只可能最多有两个字符是相同的
  let len = s1.length,
    diff = []

  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) {
      if (diff.length > 2) {
        return false
      }
      diff.push(i)
    }
  }

  if (diff.length === 0) return true
  if (diff.length !== 2) return false

  // 此时diff.length === 2
  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]
};
