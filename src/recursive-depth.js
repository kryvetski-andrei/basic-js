const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 0

    if (Array.isArray(arr)) {

      for (let i = 0; i < arr.length; i++) {
        level = Math.max(level, this.calculateDepth(arr[i]))
      }
      level++
    }

    return level
  }
};