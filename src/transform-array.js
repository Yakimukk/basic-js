const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let res = []
  let newArr = arr.slice()
  for (let el = 0; el < newArr.length; el++) {
    if (newArr[el] === undefined) {
      continue
    }
    switch(newArr[el]) {
      case '--discard-next':
        if (newArr[el + 1] !== undefined) {
        delete(newArr[el + 1])
      }
        break
      case '--discard-prev':
        if (newArr[el - 1] !== undefined) {
          res.pop()
        }
        break
      case '--double-next':
        if (newArr[el + 1] !== undefined) {
          res.push(newArr[el + 1])
       }
       break
      case '--double-prev':
        if (newArr[el - 1] !== undefined) {
          res.push(newArr[el - 1])
       }
       break
      default:
        res.push(newArr[el])
    }
    }
  return res
}

module.exports = {
  transform
};
