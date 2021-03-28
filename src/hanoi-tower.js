const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsPerSecond = turnsSpeed / 3600
  let turns = Math.pow(2, disksNumber) - 1
  let seconds = Math.floor(turns / turnsPerSecond)

  return {turns, seconds}
};
