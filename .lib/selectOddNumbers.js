const selectOdd = function (numbers) {
  let index = 0;
  let oddNumbers = [];

  for(let value of numbers) {
    if(value%2) {
      oddNumbers[index] = value;
      index++;
    }
  }
  return oddNumbers;
}

exports.selectOdd = selectOdd;
