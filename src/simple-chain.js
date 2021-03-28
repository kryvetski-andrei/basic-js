const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },

  addLink(value) {
    this.arr.push(value)
    return this
  },

  removeLink(location) {
    if (location < 1 || location > this.arr.length || typeof location !== 'number') {
      this.arr = []
      throw new Error()
    }
    this.arr = this.arr.filter(a => a != this.arr[location - 1])
    return this
    
  },

  reverseChain() {
    this.arr.reverse()
    return this
    
  },

  finishChain() {
    let result = this.arr.map(b => {

      if (b === null) {
        return '( null )'
      } 
      else {
        return `( ${b} )`
      }
    })

    result = result.join('~~')

    this.arr = []

    return result
  }
};

module.exports = chainMaker;
