const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof sampleActivity != 'string') {
    return false
  }
  else {
    sampleActivity = parseFloat(sampleActivity) 
    
    if (sampleActivity > 0 && sampleActivity <= 15) {
      // console.log(Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.log(2)/HALF_LIFE_PERIOD)))
      return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / (Math.log(2)/HALF_LIFE_PERIOD))
    }
    else {
      return false
    }
  }

};
