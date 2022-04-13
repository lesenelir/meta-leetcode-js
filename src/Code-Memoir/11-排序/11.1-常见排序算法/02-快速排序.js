let arr = [1, 7, 0, 2, 0, 2, 8, 5, 6, 3, 4, 11]

function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = Partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
  
  function Partition(arr, left, right) {
    let pivot = arr[left]

    while (left < right) {
      // 从右边找比pivot小的
      while (left < right && arr[right] > pivot) {
        right--
      }
      arr[left] = arr[right] // 此时arr[right]为比pivot小的数
      while (left < right && arr[left] <= pivot) {
        left++
      }
      arr[right] = arr[left]
    }
    arr[left] = pivot
    return left // 返回基准的下标
  }

}

console.log(quickSort(arr, 0, arr.length - 1))


// Note: 快速排序 找Pivot中心轴，所有大于Pivot的数放在Pivot右边，所有小于Pivot的数放在Pivot左边
// Left找比Pivot大的数字；Right找比Pivot小的数字
