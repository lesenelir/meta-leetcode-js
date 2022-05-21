/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  // 单调栈： 一维数组左边或者右边找比自己大或者比自己小的元素，需要用单调栈
  // 单调栈存放数组的下标
  // 单调栈的存在意义：从栈底到栈顶的序列一定要有序
  let stack = []
  let res = new Array(temperatures.length).fill(0)
  stack.push(0)

  for (let i = 1; i < temperatures.length; i++) {
    const top = stack[stack.length - 1] // 栈顶元素下标

    if (temperatures[i] <= temperatures[top]) { // 待插入元素小于等于栈顶元素
      stack.push(i)
    } else { // 待插入的元素比栈顶元素要大
      while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const j = stack.pop()
        res[j] = i - j
      }
      stack.push(i)
    }
  }

  return res

  // 暴力算法
  // let res = new Array(temperatures.length).fill(0)
  // for (let i = 0; i < temperatures.length - 1; i++) {
  //   for (let j = i + 1; j < temperatures.length; j++) {
  //     if (temperatures[j] > temperatures[i]) {
  //       res[i] = j - i
  //       break
  //     }
  //   }
  // }
  // return res
};
