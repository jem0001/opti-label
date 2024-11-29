const mysql = require("mysql2");
require("express-async-errors");
require("dotenv").config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const getRacks = async () => {
  const [rows] = await pool.query("SELECT * FROM tbl_seiren_rackmasterlist");
  return rows;
};

const getRack = async (id) => {
  const [rows] = await pool.query(
    `SELECT * FROM tbl_seiren_rackmasterlist WHERE rack_id = ?`,
    [id]
  );
  return rows;
};

module.exports = { getRacks, getRack };
