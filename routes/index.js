const { Router } = require("express");

const userRouter = require("./user");
const authRouter = require("./auth");

const router = Router();

// routes
router.use("/user", userRouter);
router.use("/auth", authRouter);

router.use("/*", (req, res) => {
    res.status(404);
    res.json({ message: "endpoint does not exist" });
  });

module.exports = router;
