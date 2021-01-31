DROP DATABASE IF EXISTS dashboard;

CREATE DATABASE dashboard;

USE dashboard;

CREATE TABLE user 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    dob INT(4),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,

);

CREATE TABLE 
(

);


