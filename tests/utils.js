import { execSync } from 'child_process';
import { rmSync, writeFileSync } from 'fs';

export function genCrystalExample(code, input) {
	const mainStruct = code.match(/struct (?<struct>O_.+)\n/)?.groups?.struct;
	const res = ['require "json"', `${code}`];
	res.push(`input = <<-JSON\n${JSON.stringify(JSON.parse(input))}\nJSON`);
	res.push(`pp ${mainStruct}.from_json(input)`);
	return res.join('\n\n');
}

export function crystalRun(code) {
	// Running from stdin causes errors, fallback to writing to file
	writeFileSync('test.cr', code);
	execSync(`crystal run test.cr`, {
		stdio: 'inherit'
	});
	rmSync('test.cr');
}
