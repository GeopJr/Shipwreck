import j2c from '../src/json2crystal.js';
import * as utils from './utils.js';

const input = JSON.stringify({
	firstName: 'Lorem',
	lastName: 'Ipsum',
	age: 46,
	pets: ['Cheems', 'Floppa', 3.14, undefined]
});

console.log('\nRunning BASIC tests\n');
console.log('Running without optimization:');
utils.crystalRun(utils.genCrystalExample(j2c(input), input));

console.log('\nRunning with optimization:');
utils.crystalRun(utils.genCrystalExample(j2c(input, true), input));
