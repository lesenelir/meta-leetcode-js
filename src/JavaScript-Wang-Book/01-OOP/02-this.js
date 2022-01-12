// this 永远返回的是一个对象
// this的实质： 函数运行时所在的对象（环境）   ;  this的设计目的：指代函数运行时的环境

var f = function () {
  // console.log(this)
  console.log(this.x)
}

var x = 1
var obj = {
  fn: f,
  x: 2
}

f()
obj.fn()


// 绑定this的方法
