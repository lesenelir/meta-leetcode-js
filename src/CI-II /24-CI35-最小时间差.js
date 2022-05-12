/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  if (timePoints.length > 24 * 60) { // 数组中数量大于一天中分钟的数量则必定有重复
    return 0
  }

  // 原数组转为分钟数组，并从小到大进行排序
  let secondArr = timePoints.map((item) => {
    let arr = item.split(':')
    return parseInt(arr[0]) * 60 + parseInt(arr[1])
  })

  secondArr.sort((a, b) => a - b)

  // 最大的差距就是 24 * 60
  let res = 24 * 60
  secondArr.push(secondArr[0] + 24 * 60) // 最小时间 + 24 * 60 追加至列表末尾 进来处理首尾时间差
  for (let i = 1; i < secondArr.length; i++) {
    res = Math.min(res, secondArr[i] - secondArr[i - 1])
  }

  return res
};
