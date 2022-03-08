let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]

// 插入排序
// 将第一个待排序列当作一个有序序列，从头到位扫描未排序序列，将元素插入合适的位置

let insertSort = function (arr) {
  for (let i = 1; i < arr.length; i++) { // 从头到尾扫描未排序的序列
    let currentNum = arr[i]
    let preIndex = i - 1
    while (preIndex >= 0 && currentNum < arr[preIndex]) { // 找合适的位置
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    // 此时已经找到最合适的位置
    arr[preIndex + 1] = currentNum
  }
  return arr
}

console.log(insertSort(arr))

/**
 *  总结：
 *    1. 插入排序需要知道前一个元素的下标preIndex,最终该变量preIndex指向要插入元素的前一个元素
 *    2. 插入排序是一种稳定算法
 */
