/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求字符串中连续出现最多的字符序列
 * @param input string字符串 输入字符串
 * @return string字符串
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
