const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = [],
    symbol;

  for (let i = 0; i < expr.length; i += 10) {
    symbol = expr.slice(i, i + 10);
    result.push(symbol);
  }

  for (let i = 0; i < result.length; i++) {
    result[i] =
      result[i] === '**********'
        ? ' '
        : result[i].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');

    /*  Object.keys(MORSE_TABLE).forEach(function (key) {
      key === result[i] ? (result[i] = this[key]) : false;
    }, MORSE_TABLE); */

    for (let k in MORSE_TABLE) {
      k === result[i] ? (result[i] = MORSE_TABLE[k]) : false;
    }
  }

  result = result.join('');
  return result;
}

module.exports = {
  decode,
};
