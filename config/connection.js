
const Sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');

// creating connection to mysql database

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

// connecting to mysql database

db.connect((err) => { if (err) {console.log(err.message) 
    throw err} console.log('Connected to MySQL database'); });
    
module.exports = db;