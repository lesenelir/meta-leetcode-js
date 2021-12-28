/**
 * @param {number[]} numbers
 * @return {number}
 */

// 二分查找，找到分界点的最小值
// 旋转前的数组是有序的，对于"局部有序"的数组都可以使用二分查找算法
var minArray = function(numbers) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {   // 二分查找最小值没有等号
    let mid = Math.floor((left + right) / 2)
    if (numbers[mid] >  numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right])  {
      right = mid
    }  else {   // 重复元素删去
      right--
    }
  }
  // 退出循环后left指向最小值的下标
  return numbers[left]
};
