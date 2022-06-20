// unit: intro
// a project that converts kelvins into fahrenheit and newtons

// today's forecast, in kelvin
const kelvin = 293;

// celsius is 273 degrees less than kelvin
let celsius = kelvin - 273;

// conversion from celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// conversion from celsius to newtons
let newton = celsius * 0.33;
newton = Math.floor(newton);

// rounding down the value to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees in Newtons`);