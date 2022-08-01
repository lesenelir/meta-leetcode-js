/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 贪心算法
  // 先排序，存入第一个元素；从第2个元素开始遍历，当前元素左端点 <= pre右端点，则重叠，合并
  intervals.sort((a, b) => a[0] - b[0])

  let res = [],
      len = intervals.length,
      pre,
      curLeft,
      curRight

  res.push(intervals[0])

  for (let i = 1; i < len; i++) {
    pre = res[res.length - 1]
    curLeft = intervals[i][0]
    curRight = intervals[i][1]

    if (curLeft <= pre[1]) {
      // 有重叠，修改右边界
      pre[1] = Math.max(pre[1], curRight)
    } else {
      // 没有重叠
      res.push(intervals[i])
    }

  }

  return res
};
