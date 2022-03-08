let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]

// 快速排序
// 分而治之思想，是冒泡排序的递归分治法
// 需要找一个数为基准pivot，比pivot小的放在前面，比pivot大的放在后面 重复该步骤

// 分区
let partition = function (arr, low, high) {
  let pivot = arr[low]
  while (low < high) {
    // 一定要先从后往前找，因为是以前面数字为基准，空出来了
    while (low < high && arr[high] > pivot) {
      high--
    }
    // 此时从后往前找到比基准小的数字
    arr[low] = arr[high]

    while (low < high && arr[low] <= pivot) {  // 【注意易错： 此处一定要有等号】
      low++
    }
    // 此时从前往后找到比基准大的数字
    arr[high] = arr[low]
  }
  // 相遇存放基准
  arr[low] = pivot
  return low
}

let quickSort = function (arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high) // 返回了第一次相遇的基准
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot+ 1, high)
  }
  return arr
}

console.log(quickSort(arr, 0, arr.length - 1))
