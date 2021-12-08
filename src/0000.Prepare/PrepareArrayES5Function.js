// ES5 数组方法
// map, foreach, filter, reduce, some, every, includes

const numbers = [12, 5, 19, 22, 17]

// 1. map 【最重要】   "映射"成一个新的数组 --- 需要有 return 返回值
const map = numbers.map(function (num) {
  return num + 1
})
console.log(numbers)
console.log(map)

const foods = ["Apple", "pear", "orange"]
const combo = foods.map(function (fruite) {
  return [fruite, "COCO"]
})
console.log(foods)
console.log(combo)  // [ [ 'Apple', 'COCO' ], [ 'pear', 'COCO' ], [ 'orange', 'COCO' ] ]  二维数组

const foodsMap = foods.map((value, index, array) => {
  return array[index] + "ssss"
})
console.log(foodsMap)

// 2.forEach
// forEach 不能有返回值
//  const buttons = document.querySelectorAll('button')
// buttons.forEach((button) => {
//   button.addEventListener('click', function () {
//     // TODO
//   })
// })

// 3. filter  筛选
const ages = [12, 5, 19, 22, 17]
const filter = ages.filter(function (age) {
  return age >= 18
})
console.log(filter)

// 4.reduce   把数组变成单一返回值的降维操作
const numberR = [1, 2, 3, 4, 5]
let sum = 0
numberR.map(function (num) {
  sum += num
})
console.log(sum)

const reduceNum = numberR.reduce(function (result, num) {
  return result + num
})
console.log(reduceNum)

// 5. some  判断数组是否至少有一个满足的元素
const someBool = ages.some(function (age) {
  return age < 18
})
console.log(someBool)  // true

// 6. every 判断数组是否所有元素都满足条件
const everyBool = ages.every(age => age > 18)
console.log(everyBool)

// 7. includes 判断数组里是否包含某个元素
const includesBool = ages.includes(17)
console.log(includesBool)
