/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  let res = [],
    len1 = arr1.length,
    len2 = arr2.length,
    i = 0,
    j = 0

  arr1.sort((a, b) => a.id - b.id)
  arr2.sort((a, b) => a.id - b.id)

  while (i < len1 && j < len2) {
    if (arr1[i].id < arr2[j].id) {
      res.push(arr1[i])
      i++
    } else if (arr1[i].id > arr2[j].id) {
      res.push(arr2[j])
      j++
    } else { // arr1[i].id === arr2[j].id
      res.push({...arr1[i], ...arr2[j]}) // 合并，后面相同的属性会覆盖前面的属性
      j++
      i++
    }
  }

  while (i < len1) {
    res.push(arr1[i])
    i++
  }

  while (j < len2) {
    res.push(arr2[j])
    j++
  }

  return res
};
