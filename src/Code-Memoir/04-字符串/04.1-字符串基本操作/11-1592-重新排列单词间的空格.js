/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let len = text.length,
      count = 0,
      arr = []

  for (let i = 0; i < len; i++) {
    if (text[i] === ' ') {
      count++
    }
  }

  // [i, j] 为一个区间 一个字符串 获取 单词数组
  for (let i = 0; i < len; i++) {
    if (text[i] === ' ') continue
    else {
      let temp = ''
      for (let j = i; j < len; j++) {
        if (text[j] !== ' ') {
          temp += text[j]
        }
        if (text[j] === ' ' || j === len - 1) {
          arr.push(temp)
          i = j
          break
        }
      }
    }
  }

  // 复现
  let res = '',
      num

  if (arr.length === 1) {
    num = count
  } else{
    num = Math.floor(count / (arr.length - 1))
  }

  for (let i = 0; i < arr.length; i++) {
    let temp
    if (i === arr.length - 1) {
      temp = count -  (arr.length - 1) * num
    } else {
      temp = num
    }
    res += arr[i]
    while (temp--) res += ' '
  }

  return res
};
