let assert = require('assert');
let lib = require('./.lib/selectOddNumbers.js');

//combine both even and odd numbers
let actualOutput =lib.selectOdd([2,6,9,3,5]) ;
let expectedOutput = [9,3,5];
assert.deepEqual(actualOutput,expectedOutput);
 
//only even numbers
actualOutput = lib.selectOdd([12,24,46,68,80]);
expectedOutput = [];
assert.deepEqual(actualOutput,expectedOutput);

//only odd numbers
actualOutput = lib.selectOdd([23,15,1,47,79]);
expectedOutput = [23,15,1,47,79];
assert.deepEqual(actualOutput,expectedOutput);
