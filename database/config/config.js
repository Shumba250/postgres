require("dotenv").config();

module.exports = {
	development: {
		database: process.env.DEV_DATABASE,
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		port: process.env.DATABASE_PORT,
		logging: false,
		dialect: "postgres",
		protocol: "postgres",
		// dialectOptions: {
		// 	ssl: {
		// 		rejectUnauthorized: false,
		// 	},
		// },
	},
	// test: {
	// 	url: process.env.TEST_DATABASE_URL,
	// 	dialect: "postgres",
	// 	dialectOptions: {
	// 		ssl: {
	// 			rejectUnauthorized: false,
	// 		},
	// 	},
	// },
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
