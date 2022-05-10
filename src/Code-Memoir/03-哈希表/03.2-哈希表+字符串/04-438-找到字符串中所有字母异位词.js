/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let hash = {}
  let res = []
  for (const pStr of p) {
    if (hash[pStr]) {
      hash[pStr] += 1
    } else {
      hash[pStr] = 1
    }
  }

  for (let i = 0; i < s.length - p.length + 1; i++) {
    // 创建一个新对象，把hash的所有属性赋给该新对象
    let tempHash = Object.assign({}, hash)
    let flag = true
    for (let j = i; j < i + p.length; j++) {
      if (tempHash[s[j]] && tempHash[s[j]] > 0) {
        tempHash[s[j]]--
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      res.push(i)
    }
  }

  return res
};

// Note: 当涉及深拷贝map时，可以考虑将map改为obj


// var findAnagrams = function(s, p) {
//   let map = new Map()
//   let res = []
//   for (const pStr of p) {
//     if (map.has(pStr)) {
//       map.set(pStr, map.get(pStr) + 1)
//     } else {
//       map.set(pStr, 1) // pStr
//     }
//   }
//
//   for (let i = 0; i < s.length; i++) {
//     // let tempMap = new Map(map) // 深拷贝？
//     let tempMap = Object.assign({}, map)
//     for (let j = i; j < s.length; j++) {
//       if (!tempMap.has(s[j])) {
//         break
//       }
//       if (tempMap.has(s[j])) {
//         let num = tempMap.get(s[j])
//         tempMap.set(s[j], --num)
//         if (tempMap.get(s[j]) < num) {
//           break
//         }
//       }
//       if (j - i + 1 === p.length) {
//         res.push(i)
//       }
//       console.log(i, j, j - i + 1, tempMap)
//     }
//   }
//
//   return res
// };
