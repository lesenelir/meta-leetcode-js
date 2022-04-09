/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('')
};


// Note： 对于字符串操作，可以使用分割字符 split 使之成为字符数组
