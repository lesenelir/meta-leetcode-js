/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 双指针： 左右指针表示法
var reverseString = function(s) {
  // s.reverse() // 方法1 API写法
  let [left, right] = [0, s.length - 1]
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
};
