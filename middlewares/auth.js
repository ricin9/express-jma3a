const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization && authorization.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("Invalid token");
    }
    req.user = decoded;
    next();
  });
};
