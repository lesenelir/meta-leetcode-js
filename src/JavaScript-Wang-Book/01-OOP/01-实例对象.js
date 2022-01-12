// JavaScript的类结构 是基于构造函数、原型链

// 构造函数特点是： 函数内部一定有this
function Vehicle(p) {
  'use strict'  // 严格模式，保证调用该函数的时候，一定是通过new方法得到
  this.price = p  // 构造函数中的this ，指的是通过该构造函数生成的对象
}

let v = new Vehicle(500)
console.log(v.price)









