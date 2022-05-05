/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let arr = s.split('')
  let k = n % s.length
  reverse(0, k - 1)
  reverse(k, arr.length - 1)
  reverse(0, arr.length - 1)
  // console.log(arr)
  return arr.join('')

  function reverse (i, j) {
    let [left, right] = [i, j]
    while (left < right) { // 相等或大于情况退出循环
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
};

// 取余操作
