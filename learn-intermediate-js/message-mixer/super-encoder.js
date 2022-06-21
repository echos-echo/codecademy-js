// unit: modules

// Import the encryptors functions here.
const {caesarCipher} = require('./encryptors.js');
const {symbolCipher} = require('./encryptors.js');
const {reverseCipher} = require('./encryptors.js');

const encodeMessage = (str) => {
  return caesarCipher(reverseCipher(symbolCipher(caesarCipher(str, 4))), 2);
}

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(caesarCipher(str, -2))), -4);
  
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);