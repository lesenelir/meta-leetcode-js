/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口
  let maxLen = 0,
      left = 0,
      right = 0,
      len = s.length,
      map = new Map()

  while (right < len) {
    while (map.has(s[right])) {
      map.delete(s[left])
      left++
    }

    map.set(s[right], s[right])
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1
    }
    right++
  }

  return maxLen
};
