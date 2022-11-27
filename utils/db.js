const mysql = require("mysql2");

const {
	MYSQL_HOST,
	MYSQL_USERNAME,
	MYSQL_PASSWORD,
	MYSQL_DATABASE,
} = require("../config");

const connection = mysql.createConnection({
	host: MYSQL_HOST,
	user: MYSQL_USERNAME,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE,
});

connection.connect();

module.exports = connection;
