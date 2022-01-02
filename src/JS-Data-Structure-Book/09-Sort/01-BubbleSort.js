import {swap} from "./util/swap";

// 冒泡算法外层循环遍历数组中所有的元素
// 内层循环遍历

function Bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1])
      }
    }
  }
  return arr
}

// 改进冒泡算法： 设置pos标记位置，pos位置后的记录均有序，只需要扫描到pos位置即可
function Bubble2(arr) {
  let i = arr.length - 1
  while (i > 0) {
    let pos = 0 // 开始时无交换记录
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j // 标记位置
        swap(arr, arr[j], arr[j + 1])
      }
    }
    i = pos
  }
  return arr
}



