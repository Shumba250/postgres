import express from "express";
import session from "express-session";
import allRouter from "./routes/index";
require("dotenv").config();

const app = express();
app.use(express.json());

const { sequelize } = require("./database/models/index");

const port = process.env.DATABASE_PORT || 5000;

const connectDb = async () => {
	console.log("checking database connection...");
	try {
		await sequelize.authenticate();
		console.log("connection established");
	} catch (error) {
		console.log("failed to connect to database", error);
	}
};
connectDb();
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

try {
	app.listen(port, () => {
		app.use("/", allRouter);
		console.log("connected to dev_database");
		console.log(`server running on port ${port}`);
	});
} catch (error) {
	console.log(error);
}
