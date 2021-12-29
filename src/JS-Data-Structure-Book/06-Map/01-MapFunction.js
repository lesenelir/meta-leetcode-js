/*
* JS中Map使用实例
* */

/*
*  Map 和 Object 之间的区别：
*     1. Map的键可以是任意值，Object的键必须是一个string
*     2. Map的键是有序的，Object的键是无序的
* */
let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = 'a string';

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");   // 对象当作map的键
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"

myMap.get('a string');   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
myMap.get({});           // undefined, 因为keyObj !== {}
myMap.get(function() {}); // undefined, 因为keyFunc !== function () {}


// ----------------------------------------------------
// 迭代map

// 1. for of 迭代 map
let myMap1 = new Map();
myMap1.set(0, "zero");
myMap1.set(1, "one");
for (const [key, value] of myMap1) {
  console.log(key + "====" + value)
}
// 将会显示两个log。一个是"0 = zero"另一个是"1 = one"

for (let key of myMap1.keys()) {
  console.log(key);
}
// 将会显示两个log。 一个是 "0" 另一个是 "1"

for (let value of myMap1.values()) {
  console.log(value);
}
// 将会显示两个log。 一个是 "zero" 另一个是 "one"

for (let [key, value] of myMap1.entries()) {
  console.log(key + " = " + value);
}
// 将会显示两个log。 一个是 "0 = zero" 另一个是 "1 = one"

for (const tempArr of myMap1) {
  console.log(tempArr)
}
// [ 0, 'zero' ]
// [ 1, 'one' ]

// 2. forEach 迭代map字典
myMap1.forEach((value, key) => {
  console.log(key + "-" + value)
})


// ----------------------------------------------------
// Map和数组之间的转换

// Map与二维数组的转换

let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap2 = new Map(kvArray);

myMap2.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap2)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
// 用...(展开操作符)操作符将Map转换为Array    （类似于set集合）
console.log([...myMap2]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap2.keys())); // 输出 ["key1", "key2"]
console.log(Array.from(myMap2.values()))

console.log([...myMap2].keys())  // Object [Array Iterator] {}
console.log([...myMap2].values()) // Object [Array Iterator] {}

