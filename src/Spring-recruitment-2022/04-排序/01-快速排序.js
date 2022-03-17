let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]


// 分区
const partition = function (arr, low, high) {
  let pivot = arr[low]
  while (low < high) {
    // 找到基准 从后面开始查找比基准小的元素
    while (low < high && arr[high] > pivot) {
      high--
    }
    arr[low] = arr[high]
    // 从前面查找比基准大的元素
    while (low < high && arr[low] <= pivot) {
      low++
    }
    arr[high] = arr[low]
  }
  // 存放基准
  arr[low] = pivot
  return low
}

// 快速排序
const quickSort = function (arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high) // 第一次返回的基准
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
  return arr
}

console.log(quickSort(arr, 0, arr.length - 1))
