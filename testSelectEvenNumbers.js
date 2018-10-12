let assert = require('assert');
let lib = require('./.lib/selectEvenNumbers.js');

//combine both even and odd numbers
let actualOutput =lib.selectEven([2,6,9,3,5]) ;
let expectedOutput = [2,6];
assert.deepEqual(actualOutput,expectedOutput);
 
//only even numbers
actualOutput = lib.selectEven([12,24,46,68,80]);
expectedOutput = [12,24,46,68,80];
assert.deepEqual(actualOutput,expectedOutput);

//only Even numbers
actualOutput = lib.selectEven([23,15,1,47,79]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);
