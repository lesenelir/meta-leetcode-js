/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  // 【错误思路】： 根据字符的长度从小到大排序，从后面（长度越长的字符）开始遍历找不同返回最大的值
  // words.sort((a, b) => {
  //   return a.length - b.length
  // })
  // console.log(words)

  // for (let i = words.length - 1; i >= 0; i--) {
  //   for (let j = i; j >= 0; j--) {
  //     if (isSame(words[i], words[j])) {
  //       continue
  //     } else {
  //       console.log(words[i], words[j])
  //       return words[i].length * words[j].length
  //     }
  //   }
  // }

  let max = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isSame(words[i],words[j])) {
        continue
      } else {
        max = max > words[i].length * words[j].length ? max : words[i].length * words[j].length
      }
    }
  }

  return max

  // 返回true 代表有相同的字符
  function isSame(s1, s2) {
    let set1 = new Set(s1.split(''))
    let set2 = new Set(s2.split(''))
    for (let item of set1) {
      if (set2.has(item)) {
        return true
      }
    }
    return false
  }

};
