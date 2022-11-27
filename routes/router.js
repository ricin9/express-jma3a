const { Router } = require("express");

const userRouter = require("./user");
const authRouter = require("./auth");

const router = Router();

// routes
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
