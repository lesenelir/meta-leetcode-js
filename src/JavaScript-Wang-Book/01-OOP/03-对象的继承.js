// JavaScript的继承是通过"原型对象"prototype实现
// 同一个构造函数的实例之间，无法共享属性 ； But, 属性、方法定义在原型上，所有实例对象就可以共享
// 每一个函数都有一个prototype属性，指向一个对象

function Animal(name) {
  this.name = name
}
// 原型对象的color属性
Animal.prototype.color = "white"   // 为Animal构造函数定义一个属于prototype属性，该属性可以被所有实例共享

let cat1 = new Animal("布偶")
let cat2 = new Animal("英短")

console.log(cat1.name + "-" + cat1.color)  // 实例对象没有color属性，调用的是原型对象的color属性
cat1.color = "black"
console.log(cat1.name + "-" + cat1.color)  // 实例对象如果有color属性，就不会去向原型对象去找
console.log(cat2.name + "-" + cat2.color)

Animal.prototype.walk = function () {      // 原型对象prototype的方法
  return this.name + "is walking"
}

console.log(cat1.walk())
console.log(cat2.walk())

// Note：  原型对象的作用： 定义实例对象共享的属性和方法

console.log("------------------------------------------------------------------------------------------")

// 原型链：
// 所有对象都有自己的原型对象(prototype)、原型对象也有自己的原型对象， 从对象-原型-原型的原型 ， 会形成原型链
// 所有对象都继承了 Object.prototype  、 Object.prototype的原型是null

// JS读取对象的某个属性时： 找对象本身的属性，如果没有  ->  对象原型的属性，如果没有  ->  原型的原型属性 ...  ->  Object.prototype

let MyArray = function () {}
MyArray.prototype = new Array()    // 构造函数的prototype指向一个数组实例
MyArray.prototype.constructor = MyArray

let mine = new MyArray()
mine.push(1, 2)
console.log(mine.length)
console.log(mine instanceof Array)


// prototype对象有一个默认的constructor属性，默认指向prototype对象所在的构造函数
console.log(mine.constructor === MyArray)

// Object构造函数                                Object原型对象prototype
//                        ------------------>
//                         Object.prototype
//
//                        <------------------
//                         Object.prototype.constructor


console.log("------------------------------------------------------------------------------------------")

// 继承：
// 让一个构造函数继承另一个构造函数：
// 1. 子类的构造函数中，调用父类的构造函数
// 2. 子类的原型指向父类的原型，这样子类就可以继承父类的原型

function Shape() {  // 图形构造函数
  this.x = 0
  this.y = 0
}

Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.log('Shape moved...')
}

// 继承步骤
function Rectangle() {
  // 1. 子类继承父类的实例
  Shape.call(this)      // 调用父类的构造函数
}

// 2. 子类继承父类的引用
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

let rect = new Rectangle()
console.log(rect instanceof Rectangle)  // true
console.log(rect instanceof Shape)      // true
console.log(rect.x + " " + rect.y )















