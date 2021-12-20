// 1. 对象
var obj1 = {
  name: 'lesenelir',
  age: 18
}
// => 等价于
var obj2 = {
  'name': 'lesenelir',
  'age': 18
}
console.log(obj1.name)
console.log(obj1["name"])    // 这种方式访问对象的属性值，需要加双引号，当作字符串
console.log('name' in obj1)
// Note: JS中的对象键值都是字符串

for (const key in obj1) {
  console.log(key + ": " + obj1.name)
}

// 2. 函数
// 对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量
// 闭包作用：1、函数内部定义一个函数，从而在函数外部可以读取函数内部的变量
function fn1() {
  var x = 1
  function fn2() {
    console.log(x)
  }
  return fn2
}

var result = fn1()  // 返回的是函数，用result变量进行接受
result()

// 立即执行函数
;(function () {
  var temp = new Date()
  console.log(temp)
}())

// 3. 数组
// JS 中的数组可以存储不同类型的值
var arr1 = [
  1,
  'lesenelir',
  [1, 2, 3],
  {
    name: 'lesenelir',
    age: 18
  },
  function () {
    return true
  }
]
console.log(arr1[3] + " " + arr1[3].name)
console.log(arr1['0'])
// 3.1 数组的本质是一种特殊的对象, 键名从0开始依次递增
console.log(typeof arr1)   // Object
// 3.2 数组键名可以不连续
arr1[100] = 'length'
console.log(arr1.length)  // 101
// 3.3 in运算符
// in运算符表示的是，检查某个【键名】是否存在，
console.log(2 in arr1)   // true
console.log('3' in arr1)  // true    --->  JS数组下标键名可以是字符串
console.log(100 in arr1)   // true
console.log(99 in arr1)  //  false   ---> JS数组没有值的键名对应的






