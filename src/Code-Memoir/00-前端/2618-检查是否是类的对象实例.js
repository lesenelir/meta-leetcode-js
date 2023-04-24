var checkIfInstanceOf = function(obj, classFunction) {
  // 类似于手写instanceof
  // obj.__proto__.__proto__ ... 一直到 null
  if (classFunction == null) return false

  while(obj != null) {
    if (obj.__proto__ === classFunction.prototype) return true
    obj = obj.__proto__
  }

  return false
};


/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf2 = function(obj, classFunction) {
  // 类似于手写instanceof
  // 递归查找
  // obj.__proto__.__proto__ ... 一直到 null
  if (classFunction == null) return false

  let flag = true
  traversal(obj)
  return flag

  function traversal(node) { // The parameter node is the xx.__proto__
    if (node == null) {
      flag = false
      return
    }
    if (node.__proto__ === classFunction.prototype) {
      flag = true
      return
    }

    traversal(node.__proto__)
  }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
