/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  // 记录pieces的每个元素的第一个元素的位置
  // map 存储 pieces的key存储第一个元素，value存储数组值
  let map = new Map(),
    lenP = pieces.length,
    lenA = arr.length

  for (let i = 0; i < lenP; i++) {
    map.set(pieces[i][0], pieces[i])
  }
  // console.log(map)

  for (let i = 0; i < lenA; ) {
    if (!map.has(arr[i])) return false

    let tempArr = map.get(arr[i]),
      lenT = tempArr.length

    for (let j = 0; j < lenT; j++) {
      if (tempArr[j] !== arr[i]) {
        return false
      }
      i++
    }

  }

  return true
};
