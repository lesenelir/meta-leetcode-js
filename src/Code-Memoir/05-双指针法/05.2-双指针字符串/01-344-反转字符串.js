/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let [left, right] = [0, s.length - 1]
  while (left < right) { // left 和 right 相遇 即跳出循环，所以没有=
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s
};


// Note： 对于反转操作，很多可以使用头尾指针
