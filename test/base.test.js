let globalVariable;

exports.mochaGlobalSetup = async function () {
	console.log('mochaGlobalSetup');
	globalVariable = 1;
};

exports.mochaGlobalTeardown = async function () {
	console.log('mochaGlobalTeardown');
	console.log(`globalVariable = ${globalVariable}`);
};

exports.mochaHooks = {
	beforeAll: (async function () {
		console.log('Before all');
		globalVariable++;
	})
};