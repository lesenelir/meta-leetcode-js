/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  let res
  if (Array.isArray(obj)) {
    res = []
  } else {
    res = {}
  }

  if (Array.isArray(obj)) { // obj <=> []
    for (let item of obj) {
      if (typeof item === 'object' && item !== null) res.push(compactObject(item))
      else if (item) res.push(item)
    }
    return res
  }

  // obj <=> {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) res[key] = compactObject(obj[key])
    else if (obj[key]) res[key] = obj[key]
  }

  return res
};
