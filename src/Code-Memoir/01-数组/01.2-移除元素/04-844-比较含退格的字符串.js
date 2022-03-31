/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let newS = finalStr(s)
  let newT = finalStr(t)
  if(newS.length !== newT.length) return false
  // 此时两者的长度相等
  for (let i = 0; i < newS.length; i++) {
    if (newS[i] !== newT[i]) {
      return false
    }
  }
  return true

  // 使用栈来创建新的数组，并把数组转成字符串
  function finalStr(str) {
    let newArr = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '#') {
        newArr.push(str[i])
      } else {
        newArr.pop()
      }

    }
    return newArr.join('')
  }
};


// Note: JS中的字符串也是一个数组，可以当作数组来处理

let str = "abc#"
console.log(str[0], str.length, str[str.length - 1])

for (const strElement of str) {
  console.log(strElement)
}

console.log(str.split(''))
console.log(str.split(' '))
let arr = ['a', 'b', 'c']
console.log(arr.join(''))

