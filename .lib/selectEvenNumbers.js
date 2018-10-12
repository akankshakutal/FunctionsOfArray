const selectEven = function (numbers) {
  let index = 0;
  let evenNumbers = [];

  for(let value of numbers) {
    if(value%2 == 0) {
      evenNumbers[index] = value;
      index++;
    }
  }
  return evenNumbers;
}

exports.selectEven = selectEven;
