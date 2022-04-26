// [3, 6, 9, 1, 2, 6]  // 每次删除3

function fn(arr) {
  let index = 0
  while (arr.length > 1) {
    index = (index + 3 - 1) % arr.length // 下一个移动的下标，由于以及删除了一个元素所以需要-1， % arr.length
    arr.splice(index, 1)
  }
  console.log(arr[0])
}

fn([3, 6, 9, 1, 2, 6])

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (m + result) % i;
  }
  return result
};

let arr = [3,6,9,1,2,6]
let res = arr.splice(2, 1, 99, 98) // [3, 6, 99, 98, 1, 2,  6]
console.log(arr)
console.log(typeof res) // [9]

// Note： 对于数组循环的题目：  可以考虑把预备处理的长度 % 数组长度 = 可以得到 循环后应该处理的长度
//        js中删除数组的某一个元素项，可以使用splice()，该方法可以修改原数组，并返回备删除元素组成的数组[item...]
