/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {

  let res = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    // i 表示数字， 将数字i 转为二进制 统计1 的个数 放入res数组
    let count = 0
    let temp = tenToTwo(i)
    temp.forEach((item) => {
      if (item === 1) count++
    })
    res[i] = count
  }
  return res

  // 将数字转换为二进制数
  function tenToTwo(num) {
    let arr = []
    while (num !== 0) {
      arr.unshift(num % 2)
      num = Math.floor(num / 2)
    }
    return arr
  }

};

// Note： 题目关键在于： 十进制转换为二进制的算法表示


// 扩展： 二进制转十进制算法
function twoToTen(num) {
  let sum = 0
  let i = 0
  while (num !== 0) {
    let x = num % 10
    num = Math.floor(num / 10)
    sum += x * Math.pow(2, i)
    i++
  }
  return sum
}

console.log(twoToTen(1001))

