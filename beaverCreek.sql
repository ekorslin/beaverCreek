-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS beaverCreekdb;
-- Creates the "todolist" database --
CREATE DATABASE beaverCreekdb;

use beaverCreekdb;


select * from teeTime;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
