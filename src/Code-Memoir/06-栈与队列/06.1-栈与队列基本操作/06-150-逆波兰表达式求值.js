/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  // 栈思想
  // 数字则入栈，遇到运算符则出栈两个元素进行运算，得到新的元素则入栈，直至tokens长度为1
  let stack = [],
      len = tokens.length

  for (let i = 0; i < len; i++) {
    console.log(stack)
    if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
      stack.push(tokens[i])
    } else {
      // tokens[i] 是字符则出栈两个元素
      let rightNum = parseInt(stack.pop())
      let leftNum = parseInt(stack.pop())
      stack.push(getNumber(tokens[i], leftNum, rightNum))
    }
  }

  return stack[0]

  function getNumber(operator, a, b) {
    let res
    switch (operator) {
      case '+':
        res = a + b
        break
      case '-':
        res = a - b
        break
      case '*':
        res = a * b
        break
      case '/':
        res = Math.trunc(a / b)
        break
    }

    return res
  }
};



var evalRPN2 = function(tokens) {
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
