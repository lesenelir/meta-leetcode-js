// 学习JavaScript数据结构与算法
// 第三章、数组 -------------------Array

let numbers = [1, 2, 5, 7, 8, 4, 6, 9]

// 1. 在数组末尾添加元素push()
numbers.push(3)
console.log(numbers)  // [1, 2, 5, 7, 8, 4, 6, 9, 3]

// 2. 在数组末尾删除元素 pop()
let tempNumber = numbers.pop()
console.log(tempNumber)  // 3
console.log(numbers)  // [1, 2, 5, 7, 8, 4, 6, 9]

// 3. 在数组开头添加元素 unshift()
numbers.unshift(0)
console.log(numbers)

// 4. 在数组开头删除元素 shift()
numbers.shift()
console.log(numbers)

/*
*   Note: push()和pop()可以组成栈结构、unshift()和shift()可以组成队列结构
* */

// 5. 在任意位置添加删除元素 splice(start, count, addEle, addEle, ...)
numbers.splice(2, 3)   // 从下标2开始删除3个元素
console.log(numbers) // [ 1, 2, 4, 6, 9 ]
numbers.splice(1, 2, 1) // 从下标1开始删除2个元素，并新添加一个元素1
console.log(numbers) // [ 1, 1, 6, 9 ]
numbers.splice(1, 0, 2) // 从下标1开始删除0个元素，增加一个元素2
console.log(numbers) // [ 1, 2, 1, 6, 9 ]

// 6. 查找数组中指定元素值的下标、返回第一个与元素值相等的下标，没有返回-1  indexOf()
let index1 = numbers.indexOf(1)
console.log(index1) // 0
let index2 = numbers.indexOf(9)
console.log(index2) // 4

// 7. 根据下标分割数组 返回新数组 slice(start, end)
let numberArray = numbers.slice(1, 3)
console.log(numberArray) // [ 2, 1]

// 8. 合并数组 concat()
const zero = 0
const positiveNumber = [1, 2, 3]
const negativeNumber = [-3, -2, -1]
let resultNumber = negativeNumber.concat(zero, positiveNumber)
console.log(resultNumber) // [-3, -2, -1, 0, 1, 2, 3]

// ----------------------------------------------------------------

// 9. 迭代器函数
const isEven = num => num % 2 === 0
let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// 9.1 every(function) 迭代数组，判断数组每一个元素是否都满足function条件
let everyBool = Nums.every(isEven)
console.log(everyBool)  // false

// 9.2 some(function) 迭代数组，判断数组中有无元素满足function条件
let someBool = Nums.some(isEven)
console.log(someBool) // true

// 9.3 filter(function)  迭代数组，筛选返回数组中满足的元素
const evenNumvers = Nums.filter(isEven)
console.log(evenNumvers)   // [2,  4,  6, 8, 10, 12, 14]

// 9.4 map(function) 迭代数组，根据function条件映射新的数组
const myMap = Nums.map(isEven)
console.log(myMap)
// [false, true,  false, true,  false, true, false, true,  false, true,  false, true, false, true,  false]


/*
* Note:
*   1. every(fn)  some(fn)  返回都是bool类型数据
*   2. filter(fn)  map(fn)  返回都是新数组
*
* */

// 10 搜索
// 10.1 find(function)  返回第一个元素的值
let x = Nums.find(isEven)
console.log(x)  // 2

// 10.2 findIndex(functionn) 返回第一个元素值的下标
let y = Nums.findIndex(isEven)
console.log(y)  // 1


// 11 数组转字符串
console.log(Nums.toString()) // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// join() 把数组中的元素按照字符串的格式进行输出
console.log(Nums.join('-')) // 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15
console.log(Nums.join('')) // 123456789101112131415







