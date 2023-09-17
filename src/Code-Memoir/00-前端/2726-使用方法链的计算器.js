class Calculator {

  /**
   * @param {number} value
   */
  constructor(value) {
    // res 是对象的属性值
    this.res = value
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    this.res += value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    this.res -= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.res *= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) throw new Error('Division by zero is not allowed')
    this.res /= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.res = Math.pow(this.res, value)
    return this
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.res
  }
}


// 这种支持链式调用的，最后都需要在 prototype 方法中 返回一个 this
