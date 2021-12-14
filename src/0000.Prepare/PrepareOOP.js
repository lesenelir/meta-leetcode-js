// ES6之前的JS，是基于构造函数和原型链
// 1. 构造函数：用来生成实例对象的函数
var Vehicle = function (p) {
  'use strict'
  this.price = p
}

// new 关键字  生成实例对象
var v = new Vehicle(1000)
console.log(v.price)

// Object.create() 创建实例对象
// 没有构造函数，以现有的普通对象去创建实例对象
var person = {
  name: 'lesenelir',
  age: 18,
  greeting: function () {
    console.log("hi, Im lesenelir")
  }
}
var personL = Object.create(person)
console.log(typeof personL)
console.log(personL.name + " " + personL.age)

// 2. this 关键字
// this 返回一个对象，指向属性或方法所在的对象
// 函数是在某个对象之中运行，this就是函数运行时所在的对象
// 函数在不同的环境中运行，这个环境就是对象
// 函数内部中的this，指代函数当前运行的环境
var fn = function () {
  console.log(this.x)
}

var x = 1
var obj = {
  fn: fn,
  x: 2
}

fn()  // 1   指代全局的this
obj.fn() // 2

// 3. this的使用场景
// 3.1 全局环境  this === window

// 3.2 构造函数 this指代实例对象

// 3.3 对象的方法  this指代方法运行时所在的对象
var o = {
  f1: function () {
    console.log(this);
    var that = this;
    var f2 = function () {
      console.log(that);
    }();
  }
}

o.f1()
// Object
// Object

// 4. 继承
// 每个函数都有一个prototype属性，指向一个对象
// 对于构造函数而言，生成实例的时候，prototype属性会自动成为实例对象的原型
// 原型对象的作用，就是定义所有实例对象共享的属性和方法
// 实例对象可以视作从原型对象衍生出来的子对象
function Animal(name) {
  this.name = name
}
Animal.prototype.color = "white"

var cat1 = new Animal("大毛")
var cat2 = new Animal("小毛")
console.log(cat1.color)
console.log(cat2.color)







