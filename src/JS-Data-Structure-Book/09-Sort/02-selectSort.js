import {swap} from "./util/swap";

// 选择排序，每次从数组中选择最小的数字

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 此时minIndex 已经存储最小值
    swap(arr, arr[i], arr[minIndex])
  }
  return arr
}
