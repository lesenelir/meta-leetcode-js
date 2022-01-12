// 打印数字的金额 ------ 输入：1000   输出"1,000"
var Test = function (n) {
  if (n < 1000) return n
  else {   // n >= 1000
    let nums = []
    while (n / 10 !== 0) {
      nums.unshift(n % 10)
      // n = n / 10
      n = Math.floor(n / 10)
    }
    const len = nums.length - 1
    let strNumArray = []
    let count = 0
    // 从后往前向新数组添加数据
    for (let i = len; i >= 0; i--) {
      strNumArray.unshift(nums[i])
      count++
      if (count % 3 === 0) {
        strNumArray.unshift(',')
        count = 0
      }
    }
    // return strNumArray
    const str = strNumArray.join()
    return str
  }

}

console.log(Test(98765))
