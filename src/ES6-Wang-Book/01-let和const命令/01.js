// let声明的变量是代码块中有效【块级作用域】
// let声明的变量不存在着变量提升


// 报错：
// {
//   {let a = 1}
//   console.log(a)
// }

// 一个花括号就是一个代码块，不同的代码块之间不能访问变量

// const 一旦声明就必须进行初始化

// const 实际上，保证的不是变量的值不得改动，而是变量所指的内存地址所保存的数据不得改动
// 对于简单类型，内存地址保存数据的值就是变量的值
// 对于复合类型（对象和数组），变量的内存地址，保存的只是一个指向实际数据的指针

const info = {}

info.name = "lesenelir"
info.name = "l"

console.log(info)

// info = {}   // info指向另一个对象，则报错

// 如果真的想对象不可变的话，使用方法 Object.freeze()
const fool = Object.freeze({})
fool.age = 18

console.log(fool) // {}

// ES6中六种声明变量的方法：
// var、function、let、const、import、class

console.log("================================================================")

// 顶层对象属性：
// 浏览器环境指的是window对象（浏览器窗口对象）、Node指的是global对象

