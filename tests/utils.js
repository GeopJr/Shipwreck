import { execSync } from 'child_process';
import { write, writeFileSync } from 'fs';

export function genCrystalExample(code, input) {
	const mainStruct = code.match(/struct (?<struct>O_.+)\n/)?.groups?.struct;
	const res = ['require "json"', `${code}`];
	res.push(`\npp ${mainStruct}.from_json(%(${JSON.stringify(JSON.parse(input))}))`);
	return res.join('\n\n');
}

export function crystalRun(code) {
	// Running from stdin causes errors, fallback to writing to file
	writeFileSync('test.cr', code);
	return execSync(`crystal run test.cr`, {
		stdio: 'inherit'
	});
}
