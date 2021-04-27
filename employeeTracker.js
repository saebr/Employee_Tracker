const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pass',
  database: 'employee_trackerDB',
});

connection.connect((err) => {
    if (err) throw err;
    start()
  });

  const start = () => {
      inquirer
      .prompt({
          name: 'initQuestion',
          type: 'list',
          message: 'What would you like to do?',
          choices: ['Update Employee Roles', 'View all Employees', 'Add Employee', 'View all Roles', 'Add Roles', 'View all Departments', 'Add Department']
      }) .then(data => {
        switch(data.initQuestion) {
          case 'View all Employees':
            connection.query('SELECT * FROM employee', (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })
          
          case 'View all Roles':
            connection.query('SELECT * FROM role', (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })

          case 'View all Departments':
            connection.query('SELECT * FROM department', (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })

            case 'Add Employee':
              inquirer
              .prompt([{
              name: 'first_name',
              type: 'input',
              message: 'What is their first name?'
              },
              {
                name: 'last_name',
              type: 'input',
              message: 'What is their last name?'
              },
              {
                name: 'role_id',
              type: 'input',
              message: 'What is their Role ID?'
              },
              {
                name: 'manager_id',
              type: 'input',
              message: 'What is their Manager ID?'
              }
              
            ]) .then(data => {
              connection.query('INSERT INTO employee SET ?',
            {
              first_name:data.first_name,
              last_name: data.last_name,
              role_id: data.role_id,
              manager_id: data.manager_id
            },
            (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })
            })
            case 'Add Department':
              inquirer
              .prompt([{
              name: 'name',
              type: 'input',
              message: 'What is the name of the department?-'
              }
            ]) .then(data => {
              connection.query('INSERT INTO department SET ?',
            {
              name:data.name,

            },
            (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })
            })
            case 'Add Roles':
              inquirer
              .prompt([{
              name: 'title',
              type: 'input',
              message: 'What title of this role?'
              },
              {
                name: 'salary',
              type: 'input',
              message: 'What is the salary of this role?'
              },
              {
                name: 'department_id',
              type: 'input',
              message: 'What is the Department ID?'
              },
            ]) .then(data => {
              connection.query('INSERT INTO role SET ?',
            {
              title:data.title,
              salary: data.salary,
              department_id: data.department_id
            },
            (err, data) => {
              if (err) throw err;
              console.table(data)
              start()
            })
            })
            
            

            

            

            

        }
      })
  }