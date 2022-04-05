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

let str = '123adb'
console.log(str.split('').reverse().join(''))

