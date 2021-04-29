/* eslint-disable no-sync */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
const CWD = process.cwd();
const SEP = path.sep;
const ICON_EXPORT_PATH = path.resolve(CWD, 'node_modules', '@carbon', 'icons-react', 'es', 'index.js');
const OUTPUT_PATH = path.resolve(CWD, 'shared', 'DynamicIcons', 'index.js');
const EXPORT_GROUP_REGEXP = /export {(.*?)} from .*/gim;

const iconNames = [];

let inputFileContent = '';

try {
	console.log(chalk.yellow('Reading ' + ICON_EXPORT_PATH));
	inputFileContent = fs.readFileSync(ICON_EXPORT_PATH, { encoding: 'utf-8' });
} catch (e) {
	console.error(chalk.red(e));
	process.exit(1);
}

let m;

while ((m = EXPORT_GROUP_REGEXP.exec(inputFileContent)) !== null) {
	// This is necessary to avoid infinite loops with zero-width matches
	if (m.index === EXPORT_GROUP_REGEXP.lastIndex) {
		EXPORT_GROUP_REGEXP.lastIndex++;
	}

	// The result can be accessed through the `m`-variable.

	for (let groupIndex = 0; groupIndex < m.length; groupIndex++) {
		const match = m[groupIndex];
		if (groupIndex === 1) {
			const arr = match.split(',');

			for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
				const iconName = arr[arrIndex];
				if (/\w+\sas\s\w+/.test(iconName) === false) {
					iconNames.push(_.trim(iconName));
				}
			}
		}
	}
}

// eslint-disable-next-line quotes
const imports = ["import dynamic from 'next/dynamic';\n"];

for (let index = 0; index < iconNames.length; index++) {
	const iconName = iconNames[index];
	// imports.push(`const ${iconName} = dynamic(() => import('@carbon/icons-react'));`);
	imports.push(`const ${iconName} = dynamic(() => import('@carbon/icons-react').then((mod) => mod.${iconName}));`);
}
imports.push(`\nexport default {\n${iconNames.map(name => `\t${name},`).join('\n')}\n};\n`);

const fileContent = imports.join('\n');

try {
	fs.writeFileSync(OUTPUT_PATH, fileContent, {
		encoding: 'utf-8',
	});
} catch (e) {
	console.error(chalk.red(e));
}
