/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// JS中实现indexOf   
var strStr = function (haystack, needle) {
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

// console.log("hello".indexOf("llo"))
