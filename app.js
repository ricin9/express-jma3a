const express = require("express");
const errorHandler = require("./middlewares/errorHandler");

const router = require("./routes/router");

// initialize express app
const app = express();

// middlewares
app.use(express.json());

// initialize routes
app.use("/", router);

app.get("/*", (req, res) => {
  res.status(404);
  res.json({ message: "endpoint does not exist" });
});

app.use(errorHandler);

app.listen(3005, () => console.log("listening on port 3005"));
