import express from "express";
// import session from "express-session";

// import allRouter from "./routes/index";
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/retrieve", async (req, res) => {
	try {
		const users = await User.findAll();
		return res.json({ users: users });
	} catch (error) {
		return res.json({ error: error.message });
	}
});

app.post("/signup", async (req, res) => {
	try {
		const { first_name, last_name, email } = req.body;
		const user = await User.create({
			first_name,
			last_name,
			email,
		});
		await user.save();
		return res
			.status(200)
			.json({ status: "success", message: "user created successfully" });
	} catch (error) {
		return res.status(500).json({ status: 500, error: error.message });
	}
});

app.patch("/:id/editSignup", async (req, res) => {
	try {
		const users = await User.findOne({ _id: req.params.id });
		if (req.body.first_name) {
			users.first_name = req.body.first_name;
		}
		if (req.body.last_name) {
			users.last_name = req.body.last_name;
		}
		if (req.body.email) {
			users.email = req.body.email;
		}
		await users.save();
		return res.status(200).json({
			status: "success",
			message: "single user info updated",
			data: { users: users },
		});
	} catch (error) {
		return res.json({ error: error.message });
	}
});

app.delete("/:id/deleteUser", async (req, res) => {
	try {
		const user = await User.deleteOne({ _id: req.params.id });
		return res
			.status(200)
			.json({ status: "successfully deleted user", data: { user: user } });
	} catch (error) {
		return res.json({ error: error.message });
	}
});

const { sequelize, User } = require("./database/models");

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
// app.use(
// 	session({
// 		secret: process.env.SESSION_SECRET,
// 		resave: false,
// 		saveUninitialized: false,
// 	})
// );

try {
	app.listen(5000, () => {
		// app.use("/", allRouter);
		console.log("connected to dev_database");
		console.log("server running on port 5000");
	});
} catch (error) {
	console.log(error);
}

export default app;
