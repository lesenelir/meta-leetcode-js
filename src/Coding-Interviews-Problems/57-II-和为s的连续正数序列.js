/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  // 连续子数组和为target
  let res = [],
      arr = []

  for (let i = 1; i <= target; i++) {
    arr.push(i)
  }

  // 滑动窗口，将两个for转换为一个for
  let left = 0,
      right = 0,
      len = arr.length,
      sum = 0,
      path = []

  while (right < len) {
    sum += arr[right]
    path.push(arr[right])
    while (sum > target) {
      sum -= arr[left]
      path.shift()
      left++
    }
    if (sum === target && path.length > 1) {
      res.push([...path])
    }
    right++
  }

  return res
};
