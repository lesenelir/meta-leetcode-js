/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = [];
  let index = 0;
  const len = pushed.length;
  for (let i = 0; i < len; i++) {
    stack.push(pushed[i]);
    while (popped[index] !== undefined && popped[index] === stack[stack.length - 1]) {
      stack.pop();
      index++;
    }
  }
  return !stack.length;

};

// 比较数组元素值是否相等
var equar = function (a, b) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}


console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))

// 数组的比较是比较地址，如果要比较数组里的元素，可以写一个函数来处理
let a1 = [ 1, 2, 3, 5 ]
let a2 = [ 5, 3, 2, 1 ]
console.log(equar(a1, a2.reverse()))
