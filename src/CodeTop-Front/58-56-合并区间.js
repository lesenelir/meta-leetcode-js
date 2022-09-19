/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 按照左端点排序，存入第一个元素，从第二个元素开始，如果当前元素的左<= 前一个元素右端点，则合并
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let res = [],
      len = intervals.length

  res.push(intervals[0])

  for (let i = 0; i < len; i++) {
    let pre = res[res.length - 1],
        curLeft = intervals[i][0],
        curRight = intervals[i][1]
    if (curLeft <= pre[1]) {
      // 有重叠
      pre[1] = Math.max(pre[1], curRight)
    } else {
      // 没有重叠则加入
      res.push(intervals[i])
    }
  }

  return res
};
