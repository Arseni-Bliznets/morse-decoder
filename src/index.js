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
};

function decode(expr) {
    const arrayOfNumbers = expr.match(/.{1,10}/g)
    const arraySort = arrayOfNumbers.map(function (o) {
            const indexOfFirst = o.indexOf(1);
            const sliceStr = o.slice(indexOfFirst).match(/.{1,2}/g).map(g => {
                if(g === '10'){
                    g = '.'
                } else if (g === '11'){
                    g = '-'
                } else {
                    g ='*'
                }
                return g
            })
            return sliceStr.join('')
        })
        const arrayOfLetters = arraySort.map(k => {
            if(k === '*'){
                k = ' '
            } else {
            k = MORSE_TABLE[k]
            }
            return k
        })
        return arrayOfLetters.join('')
}

module.exports = {
    decode
}
