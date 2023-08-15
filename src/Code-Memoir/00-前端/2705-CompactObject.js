/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  // 类似于深拷贝
  let res
  Array.isArray(obj) ? res = [] : res = {}

  // obj <=> []
  if (Array.isArray(obj)) {
    for (let item of obj) { // obj is an array
      if (typeof item === 'object' && item) res.push(compactObject(item))
      else if (item) res.push(item)
    }
    return res
  }

  // obj <=> {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key]) res[key] = compactObject(obj[key])
    else if (obj[key]) res[key] = obj[key]
  }

  return res
};
