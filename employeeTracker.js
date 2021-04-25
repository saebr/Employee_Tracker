const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pass',
  database: 'top_songsDB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });