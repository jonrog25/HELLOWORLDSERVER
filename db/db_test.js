const db = require("./db_connection")

// Query 1
db.execute('SELECT 1 + 1 AS solution', (error, results) => {
    if(error) throw error;
    console.log(results);
}
)

db.end();

// terminal > node db/db_test.js