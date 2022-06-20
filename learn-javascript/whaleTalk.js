// unit: loops
// objective: loop through a string and return the equivalent in "whale talk"

let input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray.join('').toUpperCase());