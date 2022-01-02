import {BinarySearch} from "./util/BinarySearch";

function insertSort(arr) {
  let preIndex, current

  for (let i = 0; i < arr.length; i++) {
    preIndex = i - 1  // preIndex 前的数字已经有序
    current = arr[i]  // 待插入的元素值
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]  // 后移
      preIndex--
    }
    // arr[preIndex] < current 时，preIndex后一个位置是待插入元素的位置
    arr[preIndex + 1] = current
  }

  return arr
}

// 二分查找方式解决插入排序算法
function insertSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i] // 等待排序的元素, 后续要对i重新操作，所以需要对该排序元素进行操作
    const insertIndex = BinarySearch(arr, i- 1, arr[i])  // 找到等待插入的元素位置

    // 进行后移操作
    for (let preIndex =  i - 1; preIndex >= insertIndex; preIndex--) {
      arr[preIndex + 1] = arr[preIndex]
    }
    // 插入元素
    arr[insertIndex] = temp
  }
  return arr
}



