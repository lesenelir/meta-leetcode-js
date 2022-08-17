/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // 利用栈来处理，字母则入栈，#则出栈
  let newS = getStr(s),
      newT = getStr(t)

  if (newS === newT) {
    return true
  } else {
    return false
  }

  function getStr(str) {
    let stack = [],
        len = str.length

    for (let i = 0; i < len; i++) {
      if (str[i] !== '#') {
        stack.push(str[i])
      } else {
        stack.pop()
      }
    }
    return stack.join('')
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
console.log(arr.join('')) // abc
console.log(arr.join()) // a,b,c
