/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  // 贪心算法：考虑两个维度
  let arr = new Array(ratings.length).fill(1),
      res = 0

  // 从前向后遍历，找右边评分比左边大
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i-1]) arr[i] = arr[i-1] + 1
  }

  // 从后向前遍历，找左边评分比右边大的
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i+1]) arr[i] = Math.max(arr[i], arr[i+1] + 1)
  }

  res = arr.reduce((pre, cur) => {
    return pre + cur
  }, 0)

  return res

};
