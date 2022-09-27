/**
 * @param {string} s
 * @return {number}
 */
// 暴力
var countSubstrings = function(s) {
  let len = s.length,
    count = 0

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isTruSub(i, j)) count++
    }
  }

  return count + len

  function isTruSub(left, right) {
    while (left <= right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

};
