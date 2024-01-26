const testLogin = (req, res) => {
  const db = require("../models");
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email])
};

module.exports = { testLogin };
