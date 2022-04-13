let arr = [1, 7, 0, 2, 0, 2, 8, 5, 6, 3, 4, 11]


function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = arr.slice(0, 1)
  let left = [], right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  // 此时已经完成了一趟的排序
  return quickSort(left).concat(pivot).concat(quickSort(right))
}


console.log(quickSort(arr))

// Note： 快速排序第二个版本
