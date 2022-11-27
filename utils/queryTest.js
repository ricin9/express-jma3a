const db = require("./db");

db.promise()
	.execute(
		` DELETE FROM user
      Where id IN (3, 4)
  `
	)
	.then((result) => console.log(result))
	.catch((err) => console.error(err));
