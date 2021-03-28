const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = ''

    if (options.repeatTimes === undefined) {
      options.repeatTimes = 1
    }
    if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1
    }
    if (options.addition === undefined) {
      options.addition= ''
    }
    if (options.separator === undefined) {
      options.separator = '+'
    }
    if (options.additionSeparator === undefined) {
      options.additionSeparator = '|'
    }

  for (let i = 0; i < options.repeatTimes; i++) {
    result = result + str


    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j != options.additionRepeatTimes - 1) {
        result = result + options.addition + options.additionSeparator
      }
      else result = result + options.addition
    }

    if (i == (options.repeatTimes - 1)){
      result = result
    }
    else result = result + options.separator
  }
console.log(result)
return result

};
  