/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 思路：左边界排序，从下标为1的元素开始查看是否需要合并

  intervals.sort((a, b) => a[0] - b[0])

  let res = []
  res.push(intervals[0])
  console.log(res)

  for (let i = 1; i < intervals.length; i++) {
    let pre = res[res.length - 1],
        curLeft = intervals[i][0],
        curRight = intervals[i][1]

    if (curLeft > pre[1]) { // 当前区间左边界 > 当前元素的右边界 => 不重叠
      res.push(intervals[i])
    } else {
      // 不重叠 修改 右边界
      pre[1] = Math.max(pre[1], curRight)
    }

  }

  return res

};
