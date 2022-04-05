/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'  // 通过对数组的操作，排除字符串长度增加的情况
    }
  }
  return arr.join('')
};

// Note: 对于很多操作字符串的题目，可以先把字符串转换为字符数组
