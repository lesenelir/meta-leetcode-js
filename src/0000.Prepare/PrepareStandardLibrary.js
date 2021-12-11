// JS标准库
// 1. Object 对象
// Object的实例方法就是直接定义在Object.prototype原型对象上的方法
Object.prototype.print = function () {
  console.log(this)
}
var obj1 = new Object()
console.log(obj1.print())

// Object.keys()遍历对象的属性
var obj2 = {
  p1: 'lesenelir',
  p2: 18
}
console.log(Object.keys(obj2))    // [ 'p1', 'p2' ]
console.log(Object.keys(obj2).length) // 2

// 2. 数组对象
// 2.1 数组实例方法
var arr1 = [1, 23, 34, 5, 6, 76]
// valueOf()方法是对象的通用方法，在数组对象中返回数组的本身
console.log(arr1.valueOf())  // [ 1, 23, 34, 5, 6, 76 ]
// toString()方法是对象的通用方法，在数组对象中返回数组的字符串形式
console.log(arr1.toString()) // 1,23,34,5,6,76

// 2.2 数组添加删除方法
// 数组push()在末端添加元素， 返回数组长度
// 数组pop()在末端删除元素， 返回该元素
// 数组push()和pop()方法可以形成一个"后进先出"的栈结构
var arr2 = []
arr2.push(1)
arr2.push(2, 3)
arr2.pop()
console.log(arr2)  // [ 1, 2 ]

// 数组shift()删除数组第一个元素， 返回该元素
// 数组push()和shift()方法可以形成一个"先进先出"的队列结构
var arr3 = []
arr3.push(1, 2, 3)
arr3.shift()
console.log(arr3)   // [ 2, 3 ]
// 数组unshift()在数组的开头添加元素， 返回数组长度
arr3.unshift(0, 1)
console.log(arr3)   // [ 0, 1, 2, 3 ]

// 2.3 数组颠倒
// reverse() 方法 颠倒排序数组元素
console.log(arr3.reverse())  // [ 3, 2, 1, 0 ]

// 2.4 数组合并
// concat()
console.log(arr3.concat([4], [5, 6], {a: 1}))  //  [ 3, 2, 1, 0, 4, 5, 6, { a: 1 } ]
// 浅拷贝： 如果数组成员包含对象，concat方法返回数组的一个浅拷贝，-----> 指的是新数组拷贝的是对象引用
var obj4 = {
  x: 1
}
var oldArray = [obj4]
var newArray = oldArray.concat()   // newArray 指向 oldArray 拷贝数组的引用
obj4.x = 2
console.log(newArray)  // [ { x: 2 } ]
console.log(newArray[0].x)  // 2

// 2.5 提取数组的一部分
// slice()
var arr5 = [1, 23, 4, 5, 6]
console.log(arr5.slice(1, 4))  // [ 23, 4, 5 ]    左闭右开
// Note: slice()方法重要作用： 把类似数组的对象转换为真正的数组
Array.prototype.slice.call({0: 'a', 1: 'b'})
// Array.prototype.slice.call(document.querySelectorAll('div'))

// 2.6 删除数组元素，并添加新的元素，  返回被删除的元素
// arr.splice(start, count, addElement1, addElement2, ...);
// 新添加的元素是可选项，可以不添加
arr5.splice(1, 2, 3, 7)  // [ 1, 3, 7, 5, 6 ]
console.log(arr5)

// 2.7 排序，数组排序
// sort()
var arr7 = [1, 5, 3, 4, 2, 8, 6, 9]
var arr7Test = arr7.sort(function (a, b) {  // 升序
  return a - b
})
console.log(arr7Test)

var arr7Test2 = arr7.sort((a, b) => {   // 降序
  return b - a
})
console.log(arr7Test2)
// 对象数组按特定标准进行排序
var arrObject = [
  {name: "张三", age: 30},
  {name: "李四", age: 24},
  {name: "王五", age: 28}
]
var arrObjectTest = arrObject.sort(function (o1, o2) {  // 按照年龄升序
  return o1.age - o2.age
})
console.log(arrObjectTest)

// 2.8 映射成新的数组
// map()   原数组执行参数函数，结果返回一个新的数组，原数组不变
// map() 要有返回值 return
var arr8 = [1, 2, 3]
var arr8Test = arr8.map(function (value, index, arr8) {
  return index * value
})
console.log(arr8)
console.log(arr8Test)

// 2.9 filter 过滤数组
var arr9 = [1, 2, 3, 4, 5].filter(function (elem, index, arr9) {
  return index % 2 === 0;
});

// 2.10 some() & every()
// some() 至少满足一个值
// every() 满足所有值


// 3. 包装对象
// 包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型。
// 其次是使得原始类型的值也有办法调用自己的方法。
var v1 = new Number(123)
var v2 = new String('123')
var v3 = new Boolean(true)
console.log(typeof v1) // Object
console.log(typeof v2) // Object
console.log(typeof v3) // Object

// 3.1 包装对象的实例方法
// valueOf   返回包装对象实例对应的原始类型的值
// toString  返回对应的字符串
console.log(v1.valueOf())
console.log(v2.valueOf())
console.log(v3.valueOf())

console.log(v1.toString())
console.log(v2.toString())
console.log(v3.toString())

//







