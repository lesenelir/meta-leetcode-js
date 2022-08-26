// 两个数组求组合和的相等最小值

// 输入 [1, 4, 9, 19] [7, 8, 15, 17]


// function problemSolve(arr1, arr2) {
//
//
//
// }

console.log(getCombine([1, 4, 9, 19]))

// 首先求一个数组的子集
function getCombine(arr) {
  let res = [],
      path = []

  traversal(0)
  return res

  function traversal(startIndex) {
    res.push([...path])
    for (let i = startIndex; i < arr.length; i++) {
      path.push(arr[i])
      traversal(i + 1)
      path.pop()
    }

  }

}

