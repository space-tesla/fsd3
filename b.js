const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "mcs",
    password: "Mcs@12345",      // your MySQL password (empty if none)
    database: "school" // your database name
});

connection.connect();

const sql = "SELECT * FROM Teacher WHERE salary > 20000";

connection.query(sql, (err, results) => {
    if (err) throw err;

    console.log("Teachers with salary > 20000:");
    results.forEach((row) => {
        console.log(`${row.name} - Salary: ${row.salary}`);
    });

    connection.end();
});
