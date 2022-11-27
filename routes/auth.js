const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const db = require("../utils/db");

const authRouter = Router();

authRouter.post("/", async (req, res, next) => {
	const { email, password } = req.body;

	const [rows, fields] = await db
		.promise()
		.query("SELECT id FROM user WHERE `email` = ? AND `password` = ?", [
			email,
			password,
		]);

	if (!rows[0]) {
		res.status(404);
		next(new Error("Invalid credentials"));
	} else {
		const token = jwt.sign(rows[0], JWT_SECRET);
		res.status(200).json({ token });
	}
});

module.exports = authRouter;
