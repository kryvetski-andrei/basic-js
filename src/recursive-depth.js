import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let temp = 0;
    let depth = 0;

    if (Array.isArray(arr)) {
      arr.forEach((element) => {
        temp = this.calculateDepth(element);

        if (temp > depth) {
          depth = temp;
          temp = 0;
        }
      });
      
      depth += 1;

      return depth;
    }
    return 0;
  }
}
