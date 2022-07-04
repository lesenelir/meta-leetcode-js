/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 子串一定是要连续的
  // 滑动窗口 - 最长：LR
  // 窗口满足条件，R向右移扩大窗口，并更新结果
  // 窗口不满足条件L向左移动，缩小结果
  // 优化：map保存上一次索引index
  // 滑动窗口用来维护无重复的子串 - left 是窗口的开始坐标 right 是窗口的结束坐标

  let res = 0,
      left = 0,
      right = 0,
      len = s.length,
      map = new Map()

  while (right < len) {
    // 加入的元素不满足条件，则缩小窗口
    // 更新窗口的下一个left为重复元素的下一个元素 - 原因是子串要连续
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1)
    }
    // 没有重复则不断更新窗口的右边界
    map.set(s[right], right)
    res = Math.max(res, right - left + 1)
    right++
  }

  return res
};


var lengthOfLongestSubstring2 = function(s) {
  // 子串一定是要连续的
  // 滑动窗口 - 最长：LR
  // 窗口满足条件，R向右移扩大窗口，并更新结果
  // 窗口不满足条件L向左移动，缩小结果
  let res = 0,
      left = 0,
      right = 0,
      len = s.length,
      map = new Map()

  // 滑动窗口模版
  while (right < len) {
    // 加入的元素不满足条件则缩小窗口
    // 不满足条件则缩小窗口直至该窗口内没有重复元素 - 即原窗口的right元素的后一位
    while (map.has(s[right])) { // 不满足条件时，移动左指针窗口缩小来满足条件
      map.delete(s[left])
      left++
    }
    // 没有重复元素则不断扩大窗口
    map.set(s[right], s[right])
    res = Math.max(res, right - left + 1)
    right++
  }

  return res
};
