/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 在haystack中找字符串needle
  // 双指针 or 对于每个字符用slice匹配
  if (needle.length === 0) return 0

  let [i, j] = [0, 0]

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else { // 不匹配就回退
      i = i - j + 1
      j = 0
    }
    if (j === needle.length) { // 字符串匹配成功
      return i - j
    }
  }
  return -1
};
