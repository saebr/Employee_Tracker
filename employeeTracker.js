const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pass',
  database: 'employee_trackerDB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });

  const start = () => {
      inquirer
      .prompt({
          name: 'initQuestion',
          type: 'list',
          message: 'What would you like to do?',
          choices: ['Update Employee Roles', 'View Employees', 'Add Employee', 'View All Roles', 'Add Roles', 'View all Departments', 'Add Department']
      })
  }

  start()