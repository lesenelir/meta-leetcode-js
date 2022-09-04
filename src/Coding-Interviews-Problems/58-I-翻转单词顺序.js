/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 从后开始遍历找翻转字符串
  let len = s.length,
      res = '',
      right = len - 1,
      left = right

  while (left >= 0) {

    while (s[right] === ' ') {
      right--
    }
    left = right

    // 找到不为空的字符
    while (s[left] && s[left] !== ' ') {
      left--
    }

    // left 为空,有了单词的坐标
    for (let i = left + 1; i <= right; i++) {
      res += s[i]
    }
    res += ' '
    right = left
  }

  return res.trim()
};
