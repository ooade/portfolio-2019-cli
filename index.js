#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));

if (argv.help || argv.h) {
	console.log();
	console.log('Usage ademola [option]');
	console.log();
	console.log('Available Options');
	console.log('-a, about - About Ademola');
	console.log("-n, name - Ademola's Name ");
	console.log("-w, website - Ademola's portfolio ");
	console.log("-r, resume - Ademola's resume ");
	console.log('-h --help, help - Help');
	console.log();
	return;
}

const name = 'Ademola Adegbuyi';
const about = `A 22 years old developer based in Lagos, Nigeria. Loves working with
bleeding edge technologies, playing around with these new technologies,
and making sure developers understand and use them efficiently and
effectively.`;
const portfolio = 'https://ademola.adegbuyi.me';
const resume = 'https://bit.ly/ademolaResume';

console.log();

if (argv.a || argv._[0] === 'about') {
	console.log(about);
} else if (argv.w || argv._[0] === 'porfolio') {
	console.log(portfolio);
} else if (argv.n || argv._[0] === 'name') {
	console.log(name);
} else if (argv.r || argv._[0] === 'resume') {
	console.log(resume);
} else {
	console.log(name);
	console.log();
	console.log(about);
	console.log();
	console.log(`Website: ${portfolio}`);
	console.log();
	console.log(`Resume: ${resume}`);
}

console.log();
