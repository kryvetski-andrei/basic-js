import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {

  const creatObjWithCountOfUniqueValues = (str) => {
    const splitedStr = str.split('');
    const obj = {};

    splitedStr.forEach(char => {
      if (!obj[char]) obj[char] = 0;
      obj[char] += 1;
    })
    return obj;
  }

  const firstObject = creatObjWithCountOfUniqueValues(s1);
  const secondObject = creatObjWithCountOfUniqueValues(s2);

  const compareCounts = (firstObj, secondObj) => {
    let count = 0;

    for (let keyOfFirstObj in firstObj) {
      for (let keyOfSecondObj in secondObj) {
        if (keyOfFirstObj === keyOfSecondObj) {
          count += Math.min(firstObj[keyOfFirstObj], secondObj[keyOfSecondObj]);
        };
      };
    };

    return count;
  };
  
  return compareCounts(firstObject, secondObject);
};
