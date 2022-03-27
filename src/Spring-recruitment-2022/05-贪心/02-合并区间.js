/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 按第一个数组元素的start大小升序排序
  intervals.sort((a, b) => a[0] - b[0])
  let res = []
  res.push(intervals[0])
  // 从第二个元素开始判定
  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = res[res.length - 1]
    let currentLeft = intervals[i][0]
    let currentRight = intervals[i][1]
    if (currentLeft > lastInterval[1]) {
      // 没有相交，则直接插入数组
      res.push(intervals[i])
    } else {
      // 有相交，则对右边界进行判断
      lastInterval[1] = Math.max(currentRight, lastInterval[1])
    }
  }
  return res
};

// Note: 先按照数组的第一个下标开始排序，查看第一个当前处理区间的左边和当前最近的res数组右边是否相交
