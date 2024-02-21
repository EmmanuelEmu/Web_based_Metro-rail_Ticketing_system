const testLogin = (req, res) => {
  const mysql = require("mysql2");
  const db = require("../models");

  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "11812054jh",
    database: "metro_rail",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return;
    }

    // Query to retrieve email and password
    const query = "SELECT * FROM users WHERE email = ?";
    const email = req.body.email; // Example email to query

    // Execute the query
    connection.query(query, [email], (err, results) => {
      // Release the connection back to the pool
      connection.release();

      if (err) {
        console.error("Error executing query:", err);
        return;
      }

      // Process the query results
      if (results.length > 0) {
        
        const user = results[0];
        console.log("Name: " + user.firstName + " " + user.lastName);
        console.log("Email:", user.email);
        console.log("Password:", user.password);
        return res.json("success");
      } else {
        console.log("User not found");
      }
    });
  });
};

module.exports = { testLogin };
