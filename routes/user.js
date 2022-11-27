const { Router } = require("express");
const jwt = require("jsonwebtoken");

const auth = require("../middlewares/auth");

const router = Router();

router.get("/", auth, (req, res) => {
  res.json(req.user);
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "bsahtek logged in w postit",
    wee: req.isLoggedIn,
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

module.exports = router;
