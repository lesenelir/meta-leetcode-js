/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 暴力
  let len = s.length,
      maxLen = 1,
      begin = 0
  if (len < 2) return s

  for (let i = 0; i < len - 1; i++) { // 枚举所有长度大于1的子串
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && isPalindrome(i, j)) {
        begin = i
        maxLen = j - i + 1
      }
    }
  }
  // console.log(begin , maxLen)
  return s.slice(begin, begin + maxLen)

  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

};
