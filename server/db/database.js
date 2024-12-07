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

const getUser = async (username) => {
  const [[user] = rows] = await pool.query(
    `SELECT * FROM ctech_users WHERE username = ?`,
    [username]
  );

  return user;
};

const getUserWithIdOf = async (id) => {
  const [[user] = rows] = await pool.query(
    `SELECT * FROM ctech_users WHERE id = ?`,
    [id]
  );

  return user;
};

const addProduct = async (barcode, type, sub_type, user) => {
  const [rows] = await pool.query(
    "INSERT INTO `ctech_products_stat` (`barcode`, `type`, `sub_type`, `user`) VALUES (?,?,?,?)",
    [barcode, type, sub_type, user]
  );

  return rows;
};

module.exports = { getRacks, getRack, getUser, addProduct, getUserWithIdOf };
