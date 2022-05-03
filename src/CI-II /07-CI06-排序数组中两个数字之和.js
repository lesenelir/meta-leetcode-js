/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 排序数组 优先 考虑双指针

  let res = new Array(2)
  let [left, right] = [0, numbers.length - 1]
  while (left < right) { // left === right 也要退出循环
    let sum = numbers[left] + numbers[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      res[0] = left
      res[1] = right
      break
    }
  }

  return res
};
