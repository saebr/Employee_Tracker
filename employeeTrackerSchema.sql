DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
name VARCHAR(30) NULL,
id INT PRIMARY KEY
);

CREATE TABLE role (
title VARCHAR(30) NULL,
salary DECIMAL(10,4),
department_id INT NULL,
id INT PRIMARY KEY
);

CREATE TABLE employee (
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT NULL,
manager_id INT NULL,
id INT PRIMARY KEY
)

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;