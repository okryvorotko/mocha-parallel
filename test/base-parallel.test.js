const fs = require('fs');

exports.mochaGlobalSetup = async function () {
	console.log('mochaGlobalSetup');
	fs.writeFileSync('fileToStoreVariable', '1');
};

exports.mochaGlobalTeardown = async function () {
	console.log('mochaGlobalTeardown');
	console.log(`data from file = ${fs.readFileSync('fileToStoreVariable')}`);
};

exports.mochaHooks = {
	beforeAll: (async function () {
		console.log('Before all');
		console.log(`data from file = ${fs.readFileSync('fileToStoreVariable')}`);
		fs.writeFileSync('fileToStoreVariable', '2');
	})
};