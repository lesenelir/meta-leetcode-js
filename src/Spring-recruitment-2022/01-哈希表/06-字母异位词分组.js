/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};


console.log(Array.from('fool')) // [ 'f', 'o', 'o', 'l' ]

