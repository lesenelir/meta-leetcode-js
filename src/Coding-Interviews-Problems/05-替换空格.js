/**
 * @param {string} s
 * @return {string}
 */

// 方法一、原地修改字符串.
var replaceSpace = function (s) {
  const strArr = s.split('')
  // console.log(strArr)
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      strArr[i] = '%20'
    }
  }
  return strArr.join('')
}
console.log(replaceSpace('stirng a s string'))

// Note:
// 对于JS中的很多字符串操作，很多时候都可以把字符串转换为数组进行处理
// 注意字符串中的 split 和 join 方法的使用

// 方法二、遍历原先的字符串，存入新的字符串中
var replaceSpace2 = function (s) {
  let newStr = ''

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== ' ') {
      newStr = newStr + s.charAt(i)
    } else {
      newStr = newStr + '%20'
    }
  }
  return newStr
};

// 方法三、API处理
var replaceSpace3 = function (s) {
  return s.split(' ').join('%20')
}
