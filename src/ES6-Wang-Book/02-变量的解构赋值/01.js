// ES6允许按照一定模式，从数组对象中提取值，对变量进行赋值，被成为解构

let [a, b, c] = [1, 2, 3]   // 模式匹配

let [head, ...tail] = [1, 2, 3, 4, 5]
console.log(head, tail)
// 解构不成功返回 undefined

// 解构赋值 允许使用默认值， 并且当一个数组成员严格等于undefined，默认值才生效
let [x1, y1 = 'b'] = ['a']; // x1='a', y1='b'
let [x2, y2 = 'b'] = ['a', undefined]; // x2='a', y2='b'

// 对象的解构
// 对象解构的变量名和对象名要一致
let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
console.log(foo) // "aaa"
console.log(bar) // "bbb"

// 字符串的解构赋值：
const [p, l, m, k, o] = "hello"
console.log(p, l, m, k, o)

// 函数参数的解构赋值
function f([x, y]) {
  return x + y
}

console.log(f([1, 2]))  // 3


console.log("==================================================")
// 变量的解构赋值的用途：

// 1. 交换数据
let x3 = 1
let y3 = 2
;[x3, y3] = [y3, x3]    // 注意此处的;
console.log(x3, y3)

// 2.从函数中返回多个值
function example() {
  return [1, 2, 3]
}

let [a1, b1, c1] = example()   // 返回一个数组
console.log(a1, b1, c1)

function example1() {
  return {
    foo1: 1,
    bar1: 2
  }
}
let {foo1, bar1} = example1()
console.log(foo1, bar1)

// 3. 提取JSON数据   （实质是解构赋值 在对象赋值中的应用）
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]


// 4.















