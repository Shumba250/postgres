process.env.NODE_ENV = "test";
process.env.NODE_ENV = "test";
import db from "./database/models";

beforeAll(async () => {
	await db.sequelize.drop();
	await db.sequelize.sync();
});
