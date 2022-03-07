let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]

// 冒泡排序
// 冒泡排序比较次数 = (n-1) + (n-2) + ... + 1

let bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 冒泡排序比较n-1趟
    for (let j = 0; j < arr.length - 1 - i; j++) { // 第i趟比较的次数
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))

/**
 *  总结：
 *    1. 冒泡排序是一种稳定的排序算法
 *    2. 冒泡排序的比较n-1趟；每一趟的比较次数是n-1-i
 */
