/**
 * @param {string} s
 * @return {boolean}
 */

// 验证回文串。有关于字符、数组两端判断都可以用双指针来完成
// 替换字符串中的所有字符，匹配新的字符串 replace() 替换所有的
// 使用一个替换值替换掉一个替换模式在原字符串中一个或所有的匹配项，并返回替换后的字符串
// String.prototype.replace(search, replacement)：按照给定的正则表达式进行替换，返回替换后的字符串
// search是正则表达式，表示搜索模式；replacement是替换的内容

var isPalindrome = function (s) {
  const format = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase() // 用 '' 来替换
  return isPalindrome(format)

  function isPalindrome(str) { // 判断是否为回文串函数
    let [left, right] = [0, str.length - 1]
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

};

// Note:  1. 判断回文   双指针方法；字符串的reverse方法
//        2. 字符串和正则的交替使用   String.prototype.replace(search, replacement)

// let s = "213 , 3"
// console.log(s.replace(/3/g, 'b'))
