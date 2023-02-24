import { Router } from "express";
import User from "../../database/models/user"

const route = Router();
route.post("/users", async (req, res) => {
	try {
		const { first_name, last_name, email } = req.body;
		const user = await User.create({
			id,
			first_name,
			last_name,
			email,
		});
		await user.save();
		return res
			.status(200)
			.json({ status: "success", message: "user created successfully" });
	} catch (error) {
		return res.status(500).json({ status: 500, error: "server error" });
	}
});

export default route;
