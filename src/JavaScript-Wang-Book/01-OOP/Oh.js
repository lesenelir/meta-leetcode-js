/*
*   输入一个数字n 返回一个数组存储n的各个位数
*   eg :
*     n = 987
*     nums = [9,8,7]
* */


var fn = function (n) {
  let nums = []
  while (n / 10 !== 0) {
    nums.unshift(n % 10)
    // n = n / 10
    n = Math.floor(n / 10)
  }
  return nums

}

console.log(fn(1234))
