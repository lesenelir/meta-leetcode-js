/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase()
  // 双指针 有效的回文
  let [left, right] = [0, str.length - 1]
  while (left < right) { // 相等跳出循环
    // 找到左侧满足
    if (!isLetter(str[left])) {
      left++
      continue
    }
    // 找到右侧满足
    if (!isLetter(str[right])) {
      right--
      continue
    }

    // 左右两边找到满足判断的字符
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--

  }
  return true

  function isLetter(ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')
  }

};

// Note: 有点类似于 找单词的问题
