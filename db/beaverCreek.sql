-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS beaverCreekdb;
-- Creates the "beaverCreek" database --
CREATE DATABASE beaverCreekdb;

use beaverCreekdb;

-- Creates the "TeeTimes" table --
CREATE TABLE IF NOT EXISTS TeeTimes (
    id INT AUTO_INCREMENT,
    createdAt DATETIME,
    updatedAt DATETIME,
    date DATE NOT NULL,
    time VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    numberGolfers INTEGER(1) NOT NULL,
    comments VARCHAR(255),
    cart BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

-- Creates the "Users" table --
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT,
    createdAt DATETIME,
    updatedAt DATETIME,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

-- Sets default password for database access --
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- Allows visual on database entries in MySQL Workbench, if desired --
use beaverCreekdb;

SELECT * FROM Users;
