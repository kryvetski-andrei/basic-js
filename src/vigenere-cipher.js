const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (cipher = true) {  
    this.cipher = cipher
  }

  encrypt (str, key) {
    
    let stash = ''
    let result = ''
    let lowStr = str.toLowerCase().replace(/\s/g, '')
    key = key.toLowerCase()

    let acc = 0
    
    if (str && key) {
      for (let i = 0; i < lowStr.length; i++) {
        let letter = lowStr[i].charCodeAt()
        let keyLetter = key[i % key.length].charCodeAt()
        stash += String.fromCharCode((((letter - 97) + (keyLetter - 97)) % 26) + 97)
      }
  
      for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase()[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
          result += str[i]
          acc++
        } 
        else {
          result += stash[i - acc]
        }
      }

      if (this.cipher) {
        return result.toUpperCase()
      } 
      else {
        return result.toUpperCase().split('').reverse().join('')
      }
    } 

    else {
      throw new Error('Error')
    }
  };

  decrypt (str, key) {
    let stash = ''
    let result = ''
    let lowStr = str.toLowerCase().replace(/\s/g, '')
    key = key.toLowerCase()

    let acc = 0

    if (str && key) {

      for (let i = 0; i < lowStr.length; i++) {
        let letter = lowStr[i].charCodeAt()
        let keyLetter = key[i % key.length].charCodeAt()

        if ((letter - 97) - (keyLetter - 97) < 0 ) {
          stash += String.fromCharCode((((letter - 97) - (keyLetter - 97)) + 26) + 97)
        } 
        else {
          stash += String.fromCharCode(((letter - 97) - (keyLetter - 97)) + 97)
        }
      }

      for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase()[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
          result += str[i]
          acc++
        } 
        else {
          result += stash[i - acc]
        }
      }
      if (this.cipher) {
        return result.toUpperCase()
      } 
      else {
        return result.toUpperCase().split('').reverse().join('')   
      }

    } 
    else {
      throw new Error('Error')
    } 

  };
};

module.exports = VigenereCipheringMachine;
