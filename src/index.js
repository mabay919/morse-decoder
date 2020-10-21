const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let codeStr = expr.match(/.{1,10}/g);
    let morseArr = codeStr.map(item => item.replace(/(10)/g, ".").replace(/(11)/g, "-").replace(/\*+/g, " ").replace(/(00)/g, ""));
   
    // let res = ''; 
    // for (let i = 0; i < morseArr.length; i += 1) {
    //     res = `${res}${MORSE_TABLE[morseArr[i]]}`;
    // }
      let decodArr = morseArr.map(item => MORSE_TABLE[item]);
        return decodArr.join('')
        
    }

module.exports = {
    decode
}