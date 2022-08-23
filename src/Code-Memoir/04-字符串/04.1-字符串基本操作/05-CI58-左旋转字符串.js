/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // 此题要取余操作，防止k大于s的长度
  let arr = s.split(''),
      len = arr.length,
      k = n % len

  reverse(arr, 0, k - 1)
  reverse(arr, k, len - 1)
  reverse(arr, 0, len - 1)

  return arr.join('')

  function reverse(arr, left, right) { // 相等情况退出操作
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    return arr
  }
};

// 取余操作
