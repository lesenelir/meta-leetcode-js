/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  let res = new Array(k)

  let temp = quickSort(arr, 0, arr.length - 1)
  // console.log(temp)
  res = temp.slice(0, k)
  return res


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
        // 从左边找比pivot大的
        while (left < right && arr[left] <= pivot) {
          left++
        }
        arr[right] = arr[left]
      }
      arr[left] = pivot
      return left // 返回基准的下标
    }

  }

};
