const mocha = require('mocha');
let globalVariable;

exports.mochaGlobalSetup = async function () {
	console.log('mochaGlobalSetup');
	globalVariable = 1;
	mocha.globalVariable = 1;
	process.env.GLOBAL_VAR = 'a';
	this.globalVariable = 1;
};

exports.mochaGlobalTeardown = async function () {
	console.log('mochaGlobalTeardown');
	console.log(`globalVariable = ${globalVariable}`);
	console.log(`mocha.globalVariable = ${mocha.globalVariable}`);
	console.log(`process.env.GLOBAL_VAR = ${process.env.GLOBAL_VAR}`);
	console.log(`process.env.GLOBAL_VAR2 = ${process.env.GLOBAL_VAR2}`);
	console.log(`this.globalVariable = ${this.globalVariable}`);
};

exports.mochaHooks = {
	beforeAll: (async function () {
		console.log('Before all');
		console.log(`globalVariable = ${globalVariable}`);
		console.log(`mocha.globalVariable = ${mocha.globalVariable}`);
		console.log(`process.env.GLOBAL_VAR = ${process.env.GLOBAL_VAR}`);
		console.log(`this.globalVariable = ${this.globalVariable}`);
		globalVariable++;
		mocha.globalVariable++;
		process.env.GLOBAL_VAR = 'b';
		process.env.GLOBAL_VAR2 = 'b';
		this.globalVariable ++;
	})
};