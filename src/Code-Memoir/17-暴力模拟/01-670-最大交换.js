/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  // 遍历数字每一位，查看后面的元素有没有比其大的元素
  let arr = String(num).split(''),
      len = arr.length,
      flag = false

  for (let i = 0; i < len; i++) {
    let maxNum = arr[i],
        maxIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] >= maxNum) {
        maxNum = arr[j]
        maxIndex = j
      }
      if (j === len - 1 && maxNum > arr[i]) {
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
        flag = true
      }
    }
    if (flag) break
  }

  return Number(arr.join(''))
};
