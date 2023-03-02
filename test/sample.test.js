import app from "../app";
import request from "supertest";


describe("Testing the home route", () => {
	test("Get a status of 200", async () => {
		const response = await request(app).get("/retrieve").send();
		expect(response.statusCode).toBe(200);
	});
});

describe("add a user", () => {
	test("add a user", async () => {
		const response = await request(app).post("/signup").send({
			first_name: "bob",
			last_name: "aimable",
			email: "user@example.com",
		});
		expect(response.statusCode).toBe(200);
	});
});
