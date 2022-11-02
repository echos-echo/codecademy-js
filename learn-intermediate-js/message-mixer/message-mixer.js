// unit: modules
// objective: split an existing program into modules
// disclaimer: I did not write this program, I only took existing code, 
//          split it into modules, and completed a handful of functions

// Import the functions from encryptors.js here.
const encryptors = require('./encryptors.js');
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod();
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});

/* Helper function for determining which cipher method
the user chose when they ran the program. */
function getEncryptionMethod() {
  let encryptionMethod;
  
  const encryptionType = process.argv[2];  
  if (encryptionType === 'symbol') {
    encryptionMethod = symbolCipher;
  } else if (encryptionType === 'reverse') {
    encryptionMethod = reverseCipher;
  } else if (encryptionType === 'caesar') {
    let amount = Number(process.argv[3]);
    if (Number.isNaN(amount)) {
      process.stdout.write(`Try again with a valid amount argument. \n`)
      process.exit();  
    }
    encryptionMethod = (str) => caesarCipher(str, amount);
  } 
  else {
    process.stdout.write(`Try again with a valid encryption type. \n`)
    process.exit();
  }

  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  return encryptionMethod;
}

/* Helper function for displaying the encrypted message to the user. */
function displayEncryptedMessage(encryptionMethod, userInput) {
  let str = userInput.toString().trim();    
  let output = encryptionMethod(str);
  process.stdout.write(`\nHere is your encrypted message:\n> ${output}\n`)
  process.exit();
}