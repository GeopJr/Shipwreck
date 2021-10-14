import j2c from '../src/json2crystal.js';
import * as utils from './utils.js';

const input = JSON.stringify({
	name: 'redacted',
	age: 99,
	height: 99.5,
	egg: true,
	effects: ['redacted', 'redacted', 14, 12.4, false, null, [1, true]],
	votes: { yes: 12 },
	_votes_but_underscore: { yes: 88 },
	'123_votes_but_number': { no: 12 },
	more_votes: { no: 12 },
	nested_votes: { no: { yes: 15 } },
	person1: { no: { registered: true, answers: { no: 22 } } },
	person2: { registered: true, answers: { no: 99 } }
});

console.log('\nRunning ADVANCED tests\n');
console.log('Running without optimization:');
utils.crystalRun(utils.genCrystalExample(j2c(input), input));

console.log('\nRunning with optimization:');
utils.crystalRun(utils.genCrystalExample(j2c(input, true), input));
