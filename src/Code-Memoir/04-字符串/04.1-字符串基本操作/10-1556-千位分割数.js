var thousandSeparator = function(n) {
  let arr = String(n).split(''),
      len = arr.length,
      res = [],
      count = 0

  for (let i = len - 1; i >= 0; i--) {
    if (count === 3) {
      // 此时遍历到的数组还是要加入数组中
      res.unshift('.')
      res.unshift(arr[i])
      count = 1
    } else {
      res.unshift(arr[i])
      count++
    }
  }

  return res.join('')
};


var thousandSeparator2 = function(n) {
  let arr = String(n).split(''),
    len = arr.length,
    res = [],
    count = 0

  for (let i = len - 1; i >= 0; i--) {
    res.unshift(arr[i])
    count++
    if (count === 3 && i !== 0) {
      res.unshift('.')
      count = 0
    }
  }

  return res.join('')
}
