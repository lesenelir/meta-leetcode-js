/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let arr = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let len = digits.length
  if (!len) return []
  if (len === 1) return arr[parseInt(digits[0])].split('')

  let res = []
  let path = []
  backTracking(0)
  return res

  function backTracking(startIndex) { // startIndex 是digits
    // 终止条件
    if (path.length === len) {
      res.push(path.join(''))
      return
    }

    for (const item of arr[parseInt(digits[startIndex])]) {
      // 处理单节点
      path.push(item)
      // 递归
      backTracking(startIndex + 1)
      // 回溯
      path.pop()
    }

  }
};









// var letterCombinations = function (digits) {
//   if (digits.length === 0) return []
//
//   let arr = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//   let strArr = digits.split('')
//   let len = strArr.length
//   let [startIndex, endIndex] = [parseInt(strArr[0]), parseInt(strArr[len - 1])]
//   if (startIndex > endIndex) [startIndex, endIndex] = [endIndex, startIndex]
//
//   let res = []
//   let path = []
//   backTracking(startIndex, endIndex)
//   return res
//
//   function backTracking(startIndex) {
//     // 终止条件
//     if (path.length === len) {
//       res.push(path.join(''))
//       return
//     }
//
//     // 单层搜索
//     for (let i = startIndex; i <= endIndex; i++) {
//       let temp = arr[i].split('')
//       for (let j = 0; j < temp.length; j++) {
//         // 操作
//         path.push(temp[j])
//         // 递归
//         backTracking(i + 1)
//         // 回溯
//         path.pop()
//       }
//     }
//
//   }
// };
//
// let arr= []
// arr[2] = 'abc'
// for (let i = 0; i < arr[2].length; i++) {
//   console.log(arr[2].split(''))
// }

