// unit: intro 
// a project that converts human years into dog years

let myAge = 21;
// my age
let earlyYears = 2;
// first few years of dog
earlyYears *= 10.5;

let laterYears = myAge - 2;
// first two years are accounted for
// now time for later years :)

laterYears *= 4;
// the later part of human to dog years

let myAgeInDogYears = earlyYears + laterYears;
// total number of dog years

let myName = "Eve Cho".toLowerCase();
// my name, but in all lowercase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
