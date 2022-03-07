let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]

// 选择排序
// 选择排序每次都可以选择一个最小值出来

let selectSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 选择排序比较n-1趟
    let minIndex = i // 对于每一趟而言，最小是当前的坐标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.log(selectSort(arr))

/**
 *  总结：
 *    1. 选择排序每次也比较n-1趟
 *    2. 选择排序第二次循环是找到最小值下标
 */
