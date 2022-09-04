/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口 最长 模版
  // 最长：R不断向右移动扩大窗口，如果不满足，L向右移缩小窗口；R到达结尾
  // 最短：L不断向右移动缩小窗口，如果不满足，R向右移扩大窗口；R到达结尾
  let [left, right] = [0, 0],
      res = 0,
      len = s.length,
      map = new Map()

  while (right < len) {
    // 不满足 L右移
    while (map.has(s[right])) {
      map.delete(s[left])
      left++
    }

    map.set(s[right], s[right])
    res = Math.max(res, right - left + 1)
    right++
  }

  return res
};



