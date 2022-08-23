/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = s.split('')

  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i
    let right = i + k - 1 > s.length ? s.length - 1 : i + k - 1
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
};
// 此题注重：下一次需要循环处理的节点是在哪一个下标

let str = '123adb'
console.log(str.split('').reverse().join(''))

