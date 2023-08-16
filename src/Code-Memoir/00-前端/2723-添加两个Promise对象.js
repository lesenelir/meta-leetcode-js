/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  const data1 = await promise1
  const data2 = await promise2

  // return Promise.resolve(data1 + data2)
  // async 返回的是一个 promise ，所以也可以省略 promise.resolve
  return data1 + data2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
