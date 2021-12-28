/**
 * JS当中Set集合类使用示例
 */
let mySet = new Set();

mySet.add(1) // Set [ 1 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add("some text") // Set [ 1, 5, "some text" ]
let o = {a: 1, b: 2}
mySet.add(o)

mySet.add({a: 1, b: 2}) // o 指向的是不同的对象，所以没问题
// Note : Set集合类保存不能重复的值，But，集合中插入对象保存的是对象的地址（set保存对象内容可能相同[对象地址不同]）

mySet.has(1) // true
mySet.has(3) // false
mySet.has(5)              // true
mySet.has(Math.sqrt(25))  // true
mySet.has("Some Text".toLowerCase()) // true
mySet.has(o)  // true

mySet.size // 5

mySet.delete(5)  // true,  从set中移除5
mySet.has(5)     // false, 5已经被移除

mySet.size // 4, 刚刚移除一个值

console.log(mySet)

// --------------------------------------------------------------

//  迭代Set集合

// 四种forof迭代集合     [forof循环更多的是遍历对象、集合]
for (const item of mySet) {
  console.log(item)
}

for (const item of mySet.keys()) {
  console.log(item)
}

for (const item of mySet.values()) {
  console.log(item)
}
/*
* Set.prototype.entries()
* 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。
* 为了使这个方法和Map对象保持相似， 每个值的键和值相等。
* */
for (const [key,value] of mySet.entries()) {
  // console.log(key + '----' + value)
  console.log(key)
}

// forEach 迭代   参数是一个回调函数
mySet.forEach(function (value) {
  console.log(value)
})

// --------------------------------------------------------------
// 基本集合操作
// 实现集合的并集运算
const union = (setA, setB) => {
  const unionAb = new Set()
  setA.forEach(value => unionAb.add(value))
  setB.forEach(value => unionAb.add(value))
  return unionAb
}

// 实现集合的交集运算
const intersection = (setA, setB) => {
  const intersectionSet = new Set()
  setA.forEach(value => {
    if (setB.has(value)) {
      intersectionSet.add(value)
    }
  })
  return intersectionSet
}

// 实现集合的差集运算
const difference = (setA, setB) => {
  const differenceSet = new Set()
  setA.forEach(value => {
    if (!setB.has(value)) {
      differenceSet.add(value)
    }
  })
  return differenceSet
}

// --------------------------------------------------------------
// 集合与数组的运用

let myArray = ["value1", "value2", "value3"];

// 用Set构造器将Array转换为Set
let mySetArray = new Set(myArray);

mySetArray.has("value1"); // returns true

// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySetArray]); // 与myArray完全一致


// 集合的运用：   数组去重
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log(...new Set(numbers))

/**
 *  Note: 1. 将数组作为参数传入Set集合中，则 数组 =======> 集合
 *        2. 将集合展开为数组用...操作符，则 集合 =======> 数组
 */



