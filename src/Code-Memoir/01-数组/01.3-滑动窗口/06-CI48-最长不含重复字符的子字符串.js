/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口 + map
  let map = new Map(),
    len = s.length,
    maxLen = 0,
    left = 0,
    right = 0

  while (right < len) {
    // 有重复字符 移动左指针
    while (map.has(s[right])) {
      map.delete(s[left])
      left++
    }
    // 此时已经没有重复的字符
    map.set(s[right], s[right])
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }

  return maxLen
};
