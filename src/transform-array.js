import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const controls = {
    '--discard-next': true,
    '--discard-prev': true,
    '--double-next': true,
    '--double-prev': true,
  };

  return arr
    .filter((elem, index) => arr[index - 1] !== '--discard-next')
    .filter((elem, index) => arr[index + 1] !== '--discard-prev')

    .map((elem, index) => {
      if (elem === '--double-next' && index !== arr.length - 1) {
        return arr[index + 1];
      }
      return elem;
    })

    .map((elem, index) => {
      if (elem === '--double-prev' && index) {
        return arr[index - 1];
      }
      return elem;
    })

    .filter((el) => !controls[el]);
}
