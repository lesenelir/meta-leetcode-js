/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // 字符串操作
  // 栈操作，遇到字母压栈，遇到..出栈
  let stack = [],
      arr = path.split('/'),
      len = arr.length

  // arr数组元素的类型： '': /; 'xxx': xxx; '.': .; '..': ..
  console.log(arr)

  for (let i = 0; i < len; i++) {
    if (arr[i] === '.' || arr[i] === '') continue
    else if (arr[i] === '..') stack.pop()
    else stack.push(arr[i])
  }

  // 根据
  if (stack.length === 0) return '/'
  let res = ''
  for (let i = 0; i < stack.length; i++) {
    res += `/${stack[i]}`
  }

  return res
};
