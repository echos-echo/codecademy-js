// utilities.js written by Eve Cho

const formatNumber = number => {
  let numStr = number.toString();
  let decimal = numStr.indexOf('.');

  if (decimal < 0) {
    numStr = numStr + '.00';
    decimal = numStr.indexOf('.'); 
  }

  numStr = numStr.split('');
  
  for (let i = decimal-1; i > 0; i--) {
    if ((decimal - i) % 3 == 0) {
      numStr.splice(i, 0, ',');
    }
  }
  return numStr.join('');
}

export {formatNumber};