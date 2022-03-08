let arr = [1, 4, 3, 2, 5, 3, 5, 6, 2, 9]

// 归并排序
// 分治法 需要设定两个指针指向所指元素，选择相对小的元素放入到合并空间，指针移动下一个位置

let merge = function (left, right) {
  let result = []
  // 有长度时
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  // 有一个长度归零时
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

let mergeSort = function (arr) {
  if (arr.length === 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))

/**
 *  总结：
 *    1. 归并排序是把数据分为两断，从两断中选取小的元素加入到新数据段的末尾
 *    2. 归并排序是一种稳定算法
 */
