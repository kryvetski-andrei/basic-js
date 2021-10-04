import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  
  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    for (let index in message) {
      if (message.charCodeAt(index) < 65 || message.charCodeAt(index) > 90) {
        result += message[index];
      } else {
        result += String.fromCharCode(((message.charCodeAt(index) + key.charCodeAt(keyIndex % key.length) - 130) % 26) + 65);
        keyIndex++;
      }
    }

    if (this.direct) {
      return result;
    }; 
    
    return result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    for (let index in message) {
      if (message.charCodeAt(index) < 65 || message.charCodeAt(index) > 90) {
        result += message[index];
      } else {
        result += String.fromCharCode(((message.charCodeAt(index) - key.charCodeAt(keyIndex % key.length) + 26) % 26) + 65);
        keyIndex++;
      }
    }

    if (this.direct) {
      return result;
    }; 

    return result.split('').reverse().join('');
  }
}
