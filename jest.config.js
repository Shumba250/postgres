module.exports = {
	testEnvironment: "node",
	testMatch: ["**/test/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
	setupFilesAfterEnv: ["./jest.setup.js"],
	verbose: true,
	testEnvironmentVariables: {
		NODE_ENV: "test",
	},
};
