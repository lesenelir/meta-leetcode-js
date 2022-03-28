/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = []
  for (let i = 0; i < num.length; i++) {
    let cur = num[i]
    while (stack.length > 0 && cur < stack[stack.length - 1] && k > 0) {
      // 当前元素 小于栈顶元素 栈顶元素出栈
      stack.pop()
      k--
    }
    stack.push(cur)
  }
  // k > 0 从末尾删除掉足够的值即可
  while (k > 0) {
    stack.pop()
    k--
  }
  console.log(stack)
  // 去除首位0
  while (stack.length > 0 && stack[0] === '0') {
    stack.shift()
  }
  return stack.length > 0 ? stack.join('') : '0'
};

// let str = '123455'
// console.log(str.split(''))
