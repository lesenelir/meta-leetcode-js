/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    // 数字返回true， 字符返回一个函数
    // console.log(tokens[i])
    let isNum = fn(tokens[i])
    if (isNum === true) {
      stack.push(Number(tokens[i]))
    } else {
      let rightNum = stack.pop()
      let leftNum = stack.pop()
      let res = isNum(leftNum, rightNum)
      stack.push(res)
    }
  }
  return stack[0]

  function fn(str) {
    // 返回一个函数
    if (str === '+') {
      return (a, b) => a + b
    } else if (str === '-') {
      return (a, b) => a - b
    } else if (str === '*') {
      return (a, b) => a * b
    } else if (str === '/') {
      return (a, b) => Math.trunc(a / b)
    }
    return true
  }
};
