/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  // promise all
  let res = [],
    index = 0

  return new Promise((resolve, reject) => {
    const add = (value, i) => {
      res[i] = value
      index++
      if (index === functions.length) {
        resolve(res)
      }
    }

    functions.forEach((item, index) => {
      item().then(value => {
        add(value, index)
      }, reason => {
        reject(reason)
      })
    })
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
