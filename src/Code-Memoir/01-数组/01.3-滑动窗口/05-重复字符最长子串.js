/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求字符串中连续出现最多的字符序列
 * @return string字符串
 * @param input
 */

// "abbcccdeff"
// "ccc"
function getLongestSequence( input ) {
  // write code here
  // 滑动窗口
  let left = 0,
      right = 0,
      len = input.length,
      maxLen = 0,
      res = ''

  while (right < len) {
    while (input[right] !== input[left]) {
      left++
    }

    right++
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1
      res = input.slice(left, right)
    }
  }

  return res
}
module.exports = {
  getLongestSequence : getLongestSequence
};

var lengthOfLongestSubstring = function(s) {
  // 最长滑动窗口
  // 子串必须是连续的，子序列可以是不连续的
  let maxLen = 0,
    left = 0,
    right = 0,
    len = s.length,
    map = new Map()

  while (right < len) {

    while (map.has(s[right])) { // 连续删除
      map.delete(s[left])
      left++
    }

    map.set(s[right], s[right])
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }

  return maxLen
};
