/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  // 思路:右边界越小，留给后面的边界就越大，不重叠区间的个数就可能越多
  // 区间个数 - 最大不重叠的区间个数 = 需要移除最少的区间个数

  intervals.sort((a, b) => a[1] - b[1]) // 右边界升序排序

  let len = intervals.length,
      right = intervals[0][1], // right 为上一个不重叠区间的右边界
      ans = 1 // 最多不重叠区间个数

  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= right) { // 当前选取的区间左边界>= 上一个选区区间右边界，即不重叠
      ans++
      right = intervals[i][1]
    }
  }

  return len - ans
};
