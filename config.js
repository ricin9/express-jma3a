require("dotenv").config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "secret123",
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  PORT : process.env.PORT || 3005
};
