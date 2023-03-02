require("dotenv").config();

const {
	DEV_DATABASE,
	DATABASE_HOST,
	DATABASE_PASSWORD,
	DATABASE_USER,
	DATABASE_PORT,
	TEST_DATABASE,
} = process.env;

module.exports = {
	development: {
		database: DEV_DATABASE,
		username: DATABASE_USER,
		password: DATABASE_PASSWORD,
		host: DATABASE_HOST,
		port: DATABASE_PORT,
		dialect: "postgres",
		// dialectOptions: {
		// 	ssl: {
		// 		rejectUnauthorized: false,
		// 	},
		// },
	},
	test: {
		database: "test_database",
		username: "postgres",
		password: "umurungi",
		host: "localhost",
		port: "5432",
		dialect: "postgres",
	},
	// production: {
	// 	url: process.env.DATABASE_URL,
	// 	dialect: "postgres",
	// 	dialectOptions: {
	// 		ssl: {
	// 			rejectUnauthorized: false,
	// 		},
	// 	},
	// },
};
