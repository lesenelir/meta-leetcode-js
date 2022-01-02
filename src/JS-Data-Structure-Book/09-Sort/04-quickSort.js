// 快速排序母函数
function quickSort(arr, left, right) {
  if (left < right) {
    let privot = Paritition(arr, left, right)
    quickSort(arr, left, privot - 1)  // 标记位左侧递归遍历
    quickSort(arr, privot + 1, right)  // 标记位右侧递归遍历
  }
}

// 一次分区
function Paritition(arr, left, right) {
  let pivot = arr[left]
  while (left < right) {
    // 从右侧找比pivot小的
    while (left < right && arr[right] > pivot) {
      right--
    }
    arr[left] = arr[right]

    // 从左侧找比pivot大的
    while (left < right && arr[left] < pivot) {
      left++
    }
    arr[right] = arr[left]
  }
  // 将中间值插入到剩余空的位置上
  arr[left] = pivot
  return left
}
