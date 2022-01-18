// JS是单线程模型，只能在一个线程上运行，一次只能执行一个任务，其他任务必须排队等待
/*
* 事件循环机制：
*     CPU 不管IO操作，挂起处于等待中的任务，先运行排在后面的任务，等IO操作返回了结果，再把挂起的任务继续执行下去
* */

// 同步任务： 在主线程上排队执行的任务，没有被挂起，只有前一个任务执行完后，才能执行下一个任务
// 异步任务： 不进入主线程，进入任务队列的任务。该任务采用回调函数的方式才会进入主线程
//          排在异步任务后的代码，不用等待前异步任务执行完才执行，SO， 异步任务不具有"堵塞"性质

// JS 中有主线程 & 任务队列
// 任务队列： 处理异步任务

/*
* JS运行流程：
*     主线程执行所有的同步任务，等主线程所有的同步任务全部执行完，去查看任务队列中的异步任务;
*     异步任务满足条件执行，则该异步任务进入主线程执行，此时变成同步任务;
*     等待执行完，下一个异步任务进入主线程;
*     任务队列清空，程序结束运行;
* */

// 通过编写回调函数实现异步任务，一旦异步任务重新进入主线程，就会执行回调函数

/*
*     事件循环：
*       JS引擎一遍遍检查：只要同步任务执行完后，JS引擎就检查挂起来的异步任务能否进入主线程。
*       这种循环检查机制，就叫事件循环
* */

console.log("==================================================================================")

// 异步操作可以通过回调函数来执行

function f1() {
  console.log("f1")
}

function f2() {
  console.log("f2")
}

f1()
f2()

// 如果保证f2在f1后执行，上述代码有个问题：如果f1是异步操作，则f2会立即执行，比f1先执行

// 为了保证f2永远在f1后执行，不管f1是否为异步任务，可以通过回调函数的方式来处理
function fn1(callback) {
  console.log("fn1")
  callback()
}

function fn2() {
  console.log("fn2")
}

fn1(fn2)
// 回调函数 ： 函数中嵌套函数，后执行的函数书写在先执行的函数内部

console.log("==================================================================================")

console.log("异步操作的流程控制:")

// 如果有多个异步操作，就存在一个流程控制的问题：如何确定异步操作执行的顺序

function async(arg, callback) {       // async 函数是一个异步任务，每次执行需要1秒才能完成，然后再调用回调函数
  console.log("参数为" + arg + ", 1秒后返回结果")
  setTimeout(function () {
    callback(arg * 2)
  }, 1000)
}

function final(value) {
  console.log("完成：", value)
}

async(1, function (value) {    // 出现了回调地狱
  async(2, function (value) {
    async(3, function (value) {
      async(4, function (value) {
        async(5, function (value) {
          async(6, final)
        })
      })
    })
  })
})
/*
* 参数为1, 1秒后返回结果
参数为2, 1秒后返回结果
参数为3, 1秒后返回结果
参数为4, 1秒后返回结果
参数为5, 1秒后返回结果
参数为6, 1秒后返回结果
完成： 12
* */

// 解决回调地狱、
// 1. 串行执行
let items = [ 1, 2, 3, 4, 5, 6 ];
let results = [];
// 函数series就是串行函数，它会依次执行异步任务，所有任务都完成后，才会执行final函数
// items数组保存每一个异步任务的参数，results数组保存每一个异步任务的运行结果。
function series(item) {
  if (item) {
    async(item, function (result) {
      results.push(result)
      return series(items.shift())
    })
  } else {
    return final(results[results.length - 1])
  }
}
series(items.shift())
// 运行时间是6秒

// 2. 并行执行       ；   异步任务同时执行，全部完成以后，执行final函数
items.forEach(function(item) {
  async(item, function(result){
    results.push(result)
    if(results.length === items.length) {
      final(results[results.length - 1])
    }
  })
});
// 运行时间是1秒

// 3. 串行与并行同时进行
let running = 0
let limit = 2

function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift()
    async(item, function(result) {
      results.push(result)
      running--
      if(items.length > 0) {
        launcher()
      } else if(running === 0) {
        final(results)
      }
    });
    running++
  }
}
// launcher()
// 上述代码，最多只能同时运行两个异步任务。
// 变量running记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于0，就表示所有任务都执行完了，这时就执行final函数。








