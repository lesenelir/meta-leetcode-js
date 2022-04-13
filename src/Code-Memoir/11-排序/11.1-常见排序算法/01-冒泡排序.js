let arr = [1, 7, 0, 2, 0, 2, 8, 5, 6, 3, 4, 11]


function BubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) { // 冒泡排序比较 n - 1趟
    for (let j = 0; j < len - 1 - i; j++) { // 每一趟排序 比较 len - i - 1
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(BubbleSort(arr))

// Note: 从前往后多次扫描，每一次扫描为一趟，每趟比较相邻的元素

// 总共比较 n - 1 趟
// 第一轮比较 len-1 次
// 第二轮比较 len-2 次
// 第三轮比较 len-3 次
