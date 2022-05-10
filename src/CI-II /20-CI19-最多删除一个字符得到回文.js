/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // 超出时间限制
  // let arr = s.split('')
  // let res = ''
  // console.log(arr)
  // for (let i = 0; i < arr.length; i++) {
  //   let temp = arr.slice() // 由于arr不存放引用数据类型，可以用slice模拟深拷贝
  //   temp.splice(i, 1)
  //   res = temp.join('') // 此处不能直接相连，因为splice返回的是被删除的数据（以数组形式返回）
  //   // console.log(res)
  //   if (isTrueStr(res)) {
  //     return true
  //   }
  // }

  // return false
  let [left, right] = [0, s.length - 1]

  while (left < right && s[left] === s[right]) {
    left++
    right--
  }
  // 此时到了 s[left] s[right] 不相等情况 或者 right >= left情况

  if (left >= right) return true // 第一次走完没有不相等情况

  if (isTrueStr(left + 1, right)) return true // 删除left坐标元素
  if (isTrueStr(left, right - 1)) return true // 删除right坐标元素

  return false

  function isTrueStr (i, j) {
    let [left, right] = [i, j]
    while (left < right) { // 相等时跳出循环
      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

};
