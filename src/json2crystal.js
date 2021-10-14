import dq from 'fast-deep-equal';

const crystallies = {
	string: 'String',
	boolean: 'Bool',
	int: 'Int64',
	float: 'Float64',
	undefined: 'Nil'
};

export default function (json, optimize = false) {
	const entries = Object.entries(JSON.parse(json));
	if (entries.length === 0) return '';
	const struct = {};
	function addStruct(obj) {
		struct[obj.name] = obj.value;
	}
	handetypes(entries, addStruct);
	let typedStruct = Object.entries(struct);

	if (optimize) typedStruct = clean(typedStruct);
	const res = [];
	// Map used for reusing random variable names that match
	const nameCache = new Map();
	// Loop through all generated types and format them for Crystal
	for (let i = 0; i < typedStruct.length; i++) {
		const structArr = ['struct ' + typedStruct[i][0], '\tinclude JSON::Serializable\n'];
		const body = Object.entries(typedStruct[i][1]);
		for (let j = 0; j < body.length; j++) {
			let variable = body[j][0];
			let shouldNewLine = false;
			if (!isVarSafe(variable)) {
				structArr.push(`\t@[JSON::Field(key: "${variable}")]`);
				// Reuse or generate new random variable name
				variable =
					'n_' +
					(nameCache.has(variable)
						? nameCache.get(variable)
						: nameCache.set(variable, randomID()).get(variable));
				shouldNewLine = true;
			}
			structArr.push(`\tproperty ${variable} : ${body[j][1]}${shouldNewLine ? '\n' : ''}`);
		}
		structArr.push('end');
		res.push(structArr.join('\n'));
	}

	return res.join('\n');
}

function handetypes(ent, setter, t = false, rand = randomID()) {
	let res = {};
	for (let i = 0; i < ent.length; i++) {
		res[ent[i][0]] = typeHandler(ent[i][1], setter);
	}
	setter({
		name: (t ? 'T_' : 'O_') + rand,
		value: res
	});
}

// Detect and name the value type according to Crystal
function typeHandler(tp, setter) {
	let type = typeof tp;
	if (type === 'number') {
		type = tp === parseInt(tp) ? 'int' : 'float';
		type = crystallies[type.toLowerCase()];
	} else if (type === 'object' && tp != null) {
		const isArray = typeof tp.push === 'function';
		const rand = randomID();
		// Nested json
		if (!isArray) {
			handetypes(Object.entries(tp), setter, true, rand);
			type = 'T_' + rand;
		} else {
			type = handleArray(tp, setter);
		}
	} else {
		if (tp == null) type = 'undefined';
		type = crystallies[type.toLowerCase()];
	}
	return type;
}

function handleArray(arr, setter) {
	let types = [];
	for (let i = 0; i < arr.length; i++) {
		types.push(typeHandler(arr[i], setter));
	}
	types = [...new Set(types)];
	types = types.join('|');
	return 'Array(' + types + ')';
}

function isVarSafe(variable) {
	return /^[a-z][a-zA-Z_0-9]*$/.test(variable);
}

function randomID() {
	// Not super random but random enough
	return Math.round(new Date().valueOf() * Math.random()).toString(36);
}

// Go through all value types and if any of them match
// 100%, reuse.
function clean(ent) {
	let tmp = ent.filter((x) => x);
	const keys2replace = {};
	for (let i = 0; i < tmp.length; i++) {
		const structk2r = [];
		for (let j = i + 1; j < tmp.length; j++) {
			if (dq(tmp[i][1], tmp[j][1])) {
				structk2r.push(tmp[j][0]);
				delete tmp[j];
				tmp = tmp.filter((x) => x);
			}
		}
		if (structk2r.length > 0) keys2replace[tmp[i][0]] = structk2r;
	}
	const pp = Object.entries(keys2replace);
	for (let i = 0; i < Object.keys(pp).length; i++) {
		for (let j = 0; j < pp[i][1].length; j++) {
			tmp = replaceStruct(tmp, pp[i][1][j], pp[i][0]);
		}
	}
	// Recursive till input matches output (can't optimize more)
	if (!dq(ent, tmp)) tmp = clean(tmp);
	return tmp;
}

function replaceStruct(ent, key, replacement) {
	const tmp = ent;
	for (let i = 0; i < tmp.length; i++) {
		Object.entries(tmp[i][1]).forEach((x) => {
			if (x[1] === key) {
				tmp[i][1][x[0]] = replacement;
			} else if (x[1].includes(key)) {
				tmp[i][1][x[0]] = x[1].replace(key, replacement);
			}
		});
	}
	return tmp;
}
