import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str.length === 0) return '';

  const arr = str.split('');
  let stack = [];
  let result = '';

  arr.forEach((letter) => {
    if (stack.length > 0) {
      if (letter === stack[stack.length - 1]) stack.push(letter);
      else {
        stack.length === 1
          ? (result += stack[0])
          : (result += `${stack.length}${stack[0]}`);
        stack = [];
      }
    }

    if (stack.length === 0) stack.push(letter);
  });

  stack.length === 1
    ? (result += stack[0])
    : (result += `${stack.length}${stack[0]}`);

  return result;

  // const arr = str.split('');
  // let collectedStr = '';

  // const obj = arr.reduce((count, letter) => {

  //   count[letter] = (count[letter] || 0) + 1;
  //   // console.log(count[letter], 'count letter')
  //   // console.log(count)
  //   return count;
  // }, {})

  // console.log(obj)

  // for (let letter in obj) {
  //   collectedStr += obj[letter] + letter;
  // }
  // return collectedStr;
}
