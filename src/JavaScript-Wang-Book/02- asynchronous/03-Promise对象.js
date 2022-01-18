// Promise对象 是JS异步操作的解决方案，为异步操作提供统一的接口
// Promise 充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口
// Promise 可以使得异步操作写起来就像同步操作流程，不必一层层嵌套回调函数

// 1. Promise 是一个对象 也是一个构造函数
function f1(resolve, reject) {
  // 异步操作代码：
}

let p1 = new Promise(f1)  // Promise 构造函数接受一个回调函数f1作为参数，返回一个p1的Promise实例
// Promise 思想： 所有的异步任务都返回一个Promise实例，且每一个Promise都有一个then方法，用来指定下一步回调函数

p1.then(f2)   // p1异步任务执行完 就会执行f2 ------- 把回调地狱写法 写成链式写法

console.log("==================================================================================")

// 二、 Promise的对象状态

/*
*   Promise对象状态：
*       异步操作未完成（pending）
        异步操作成功（fulfilled）
        异步操作失败（rejected）
        fulfilled和rejected合在一起称为resolved（已定型）
* */

/*
* 这三种的状态的变化途径只有两种。
    从“未完成”到“成功”
    从“未完成”到“失败”
    Note：           Promise实例的状态变化只可能发生一次
* */

// Promise 的最终结果只有两种：
// 异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
// 异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。

console.log("==================================================================================")

// 三、 Promise.prototype.then()
let pp1 = new Promise(function (resolve, reject) {
  resolve('成功');
});
pp1.then(console.log, console.error);
// "成功"

let pp2 = new Promise(function (resolve, reject) {
  reject(new Error('失败'));
});
pp2.then(console.log, console.error);
// Error: 失败

/*
p1
    .then(step1)
    .then(step2)
    .then(step3)
    .then(
        console.log,
        console.error
    );
*/
// p1后面有四个then，意味依次有四个回调函数。只要前一步的状态变为fulfilled，就会依次执行紧跟在后面的回调函数



