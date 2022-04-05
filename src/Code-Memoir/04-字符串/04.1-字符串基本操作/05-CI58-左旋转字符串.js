/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let arr = s.split('')
  let temp = []
  for (let i = n; i < arr.length; i++) {
    temp.push(arr[i])
  }
  for (let i = 0; i < n; i++) {
    temp.push(arr[i])
  }
  return temp.join('')
};

// Note: 对于很多的字符串操作，可以做到局部反转，在做到全局反转
