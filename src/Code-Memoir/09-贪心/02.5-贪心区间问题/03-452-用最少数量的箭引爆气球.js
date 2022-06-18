/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) return 0

  points.sort((a, b) => a[1] - b[1]) // 以右节点升序排序

  let len = points.length,
      R = points[0][1], // 右边界
      res = 1

  for (let i = 1; i < len; i++) {
    if (points[i][0] > R) { // 当前气球的左端点大于当前气球右边界，即不重合时，重新定义R并记录
      R = points[i][1]
      res++
    }
  }
  return res
};
