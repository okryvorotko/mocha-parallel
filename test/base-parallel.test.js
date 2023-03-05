const mocha = require('mocha');
const fs = require('fs');
let globalVariable;
process.globalVariable = 1;

exports.mochaGlobalSetup = async function () {
	console.log('mochaGlobalSetup');
	globalVariable = 1;
	mocha.globalVariable = 1;
	process.env.GLOBAL_VAR = 'a';
	this.globalVariable = 1;
	global.globalVariable = 1;
	fs.writeFileSync('fileToStoreVariable', '1');
};

exports.mochaGlobalTeardown = async function () {
	console.log('mochaGlobalTeardown');
	console.log(`globalVariable = ${globalVariable}`);
	console.log(`mocha.globalVariable = ${mocha.globalVariable}`);
	console.log(`process.env.GLOBAL_VAR = ${process.env.GLOBAL_VAR}`);
	console.log(`process.env.GLOBAL_VAR2 = ${process.env.GLOBAL_VAR2}`);
	console.log(`this.globalVariable = ${this.globalVariable}`);
	console.log(`global.globalVariable = ${global.globalVariable}`);
	console.log(`process.globalVariable = ${process.globalVariable}`);
	console.log(`data from file = ${fs.readFileSync('fileToStoreVariable')}`);
};

exports.mochaHooks = {
	beforeAll: (async function () {
		console.log('Before all');
		console.log(`globalVariable = ${globalVariable}`);
		console.log(`mocha.globalVariable = ${mocha.globalVariable}`);
		console.log(`process.env.GLOBAL_VAR = ${process.env.GLOBAL_VAR}`);
		console.log(`this.globalVariable = ${this.globalVariable}`);
		console.log(`global.globalVariable = ${global.globalVariable}`);
		console.log(`process.globalVariable = ${process.globalVariable}`);
		console.log(`data from file = ${fs.readFileSync('fileToStoreVariable')}`);
		globalVariable++;
		mocha.globalVariable++;
		process.env.GLOBAL_VAR = 'b';
		process.env.GLOBAL_VAR2 = 'b';
		this.globalVariable ++;
		global.globalVariable++;
		process.globalVariable++;
		fs.writeFileSync('fileToStoreVariable', '2');
	})
};