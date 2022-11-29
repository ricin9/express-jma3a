const express = require("express");

const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const { PORT } = require('./config')

// initialize express app
const app = express();

// global middlewares
app.use(express.json());

// router & error handler
app.use("/", router);
app.use(errorHandler);

// listen to port
app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`));
