const db = require("./db");

// test database query
db.promise()
	.execute(
		` show tables`
	)
	.then((result) => console.log(result))
	.catch((err) => console.error(err));
